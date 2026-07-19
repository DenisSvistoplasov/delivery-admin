import { ToggleFavoriteButton } from '~features/toggle-favorite/ui/ToggleFavoriteButton';
import type { Dish } from '../model/types';

export const DishItem = ({ id, image, inStock, price, title }: Dish) => {
  return (
    <tr style={{ opacity: inStock ? 1 : 0.4 }}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price} руб.</td>
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
