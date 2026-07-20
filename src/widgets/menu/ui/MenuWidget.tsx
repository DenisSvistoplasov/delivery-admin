import { useMutation, useQuery } from '@tramvai/react-query';
import { useState } from 'react';
import { getMenuQuery, updateDishMutation } from '~entities/menu/model/queries';
import { DishItem } from '~entities/dish/ui/DishItem';

export const MenuWidget = () => {
  const [page, setPage] = useState(1);

  const {
    data: menu,
    isError,
    isLoading,
  } = useQuery(getMenuQuery, { page, limit: 5 });

  const isFirstPage = page === 1;
  const isLastPage = !menu?.length;

  return (
    <div>
      <h1>Меню ресторана</h1>

      {(() => {
        if (isLoading) {
          return <p>Загрузка меню...</p>;
        }

        if (isError || !menu) {
          return (
            <p role="alert">
              Не удалось загрузить меню. Попробуйте обновить страницу.
            </p>
          );
        }

        return (
          <>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                type="button"
                disabled={isFirstPage}
                onClick={() => setPage(page - 1)}
              >
                {'<'}
              </button>
              <span>Страница: {page}</span>
              <button
                type="button"
                disabled={isLastPage}
                onClick={() => setPage(page + 1)}
              >
                {'>'}
              </button>
            </div>

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
                {menu?.length ? (
                  menu.map((item) => <DishItem {...item} key={item.id} />)
                ) : (
                  <tr style={{ textAlign: 'center' }}>
                    <td colSpan={6}>Нет блюд</td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        );
      })()}
    </div>
  );
};
