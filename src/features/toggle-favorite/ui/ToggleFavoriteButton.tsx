import { useStore, useEvents } from '@tramvai/state';
import type { Dish } from '~entities/dish/model/types';
import {
  addDishToFavorite,
  deleteDishFromFavorite,
  FavoriteDishesStore,
} from '~entities/dish/model/store';
import { useCallback, useMemo } from 'react';
import styles from './ToggleFavoriteButton.module.css';

interface ToggleFavoriteButtonProps {
  dish: Dish;
}

export const ToggleFavoriteButton = ({ dish }: ToggleFavoriteButtonProps) => {
  const favoriteDishes = useStore(FavoriteDishesStore);
  const [addFavorite, removeFavorite] = useEvents([
    addDishToFavorite,
    deleteDishFromFavorite,
  ]);

  const isFavorite = useMemo(
    () => favoriteDishes.some((favoriteDish) => favoriteDish.id === dish.id),
    [dish.id, favoriteDishes]
  );

  const handleChange = useCallback(() => {
    if (isFavorite) {
      removeFavorite(dish.id);
    } else {
      addFavorite(dish);
    }
  }, [addFavorite, dish, isFavorite, removeFavorite]);

  return (
    <button
      className={`${styles.toggle} ${isFavorite ? styles.active : ''}`}
      onClick={handleChange}
      type="button"
      aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
    >
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
    </button>
  );
};
