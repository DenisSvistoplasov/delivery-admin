import { useStore } from '@tramvai/state';
import { FavoriteDishesStore } from '~entities/dish/model/store';
import { DishItem } from '~entities/dish/ui/DishItem';

export const FavoritesWidget = () => {
  const favoriteDishes = useStore(FavoriteDishesStore);

  return (
    <div>
      <h1>Избранные блюда</h1>

      <table
        border={1}
        cellPadding={10}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px',
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Изображение</th>
            <th>В наличии</th>
            <th>Избранное</th>
          </tr>
        </thead>
        <tbody>
          {favoriteDishes.length ? (
            favoriteDishes.map((item) => <DishItem {...item} key={item.id} />)
          ) : (
            <tr style={{ textAlign: 'center' }}>
              <td colSpan={6}>Нет избранных блюд</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
