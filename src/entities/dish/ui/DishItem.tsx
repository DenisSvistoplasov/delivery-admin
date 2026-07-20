import { ToggleFavoriteButton } from '~features/toggle-favorite/ui/ToggleFavoriteButton';
import { useMutation } from '@tramvai/react-query';
import { updateDishMutation } from '~entities/menu/model/queries';
import { useCallback, useState } from 'react';
import type { Dish } from '../model/types';

export const DishItem = (dish: Dish) => {
  const { id, image, inStock, price, title } = dish;

  const [isPriceEditing, setIsPriceEditing] = useState(false);

  const { mutate: updateDish } = useMutation(updateDishMutation);

  const onPriceChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (price !== e.target.value) {
        updateDish({
          ...dish,
          price: e.target.value,
        });
      }
      setIsPriceEditing(false);
    },
    [dish, price, updateDish]
  );

  return (
    <tr style={{ opacity: inStock ? 1 : 0.4 }}>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        {isPriceEditing ? (
          <input
            autoFocus
            defaultValue={price}
            onBlur={onPriceChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                (event.target as HTMLInputElement).blur();
              }
            }}
          />
        ) : (
          <span onClick={() => setIsPriceEditing(true)}>{price} руб.</span>
        )}
      </td>
      <td>
        <img
          src={image}
          alt={title}
          style={{
            width: '100px',
            maxHeight: '200px',
            objectFit: 'contain',
          }}
        />
      </td>
      <td>{inStock ? 'Да' : 'Нет'}</td>
      <td>
        <ToggleFavoriteButton dish={{ id, title, price, image, inStock }} />
      </td>
    </tr>
  );
};
