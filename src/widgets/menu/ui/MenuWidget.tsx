import { useQuery } from '@tramvai/react-query';
import { DishItem } from '~entities/dish/ui/DishItem';
import { getMenuQuery } from '~entities/menu/model/queries';

export const MenuWidget = () => {
  const { data: menu, isError, isLoading } = useQuery(getMenuQuery);

  return (
    <div>
      <h1>Меню ресторана</h1>
      {isLoading && <p>Загрузка меню...</p>}
      {isError && (
        <p role="alert">
          Не удалось загрузить меню. Попробуйте обновить страницу.
        </p>
      )}

      {!!menu?.length && (
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
            </tr>
          </thead>
          <tbody>
            {menu.map((item) => (
              <DishItem {...item} key={item.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
