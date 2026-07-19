import { createEvent, createReducer } from '@tramvai/state';
import type { Dish } from './types';

export const addDishToFavorite = createEvent<Dish>('addDishToFavorite');
export const deleteDishFromFavorite = createEvent<Dish['id']>(
  'deleteDishFromFavorite'
);

export const FavoriteDishesStore = createReducer<Dish[]>('favoriteDishes', [])
  .on(addDishToFavorite, (state, dish) => [...state, dish])
  .on(deleteDishFromFavorite, (state, dishId) =>
    state.filter((dish) => dish.id !== dishId)
  );
