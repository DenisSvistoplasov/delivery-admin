import { useQuery } from '@tramvai/react-query';
import {
  ORDER_STATUS_BG_COLOR,
  ORDER_STATUS_MAP,
} from '~entities/order/model/constants';
import { getOrdersQuery } from '~entities/order/model/queries';

export const DashboardPage = () => {
  const { data: orders, isLoading, isError } = useQuery(getOrdersQuery);

  if (isLoading) return <div>Загрузка заказов...</div>;

  if (isError) {
    return (
      <div role="alert">
        Не удалось загрузить заказы. Попробуйте обновить страницу.
      </div>
    );
  }

  return (
    <div>
      <h1>Дашборд заказов</h1>

      <table
        border={1}
        cellPadding={10}
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Клиент</th>
            <th>Создан</th>
            <th>Сумма</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.clientName}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>{order.price} руб.</td>
              <td>
                <span
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    backgroundColor: ORDER_STATUS_BG_COLOR[order.status % 5],
                  }}
                >
                  {ORDER_STATUS_MAP[order.status % 5]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DashboardPage.actions = [getOrdersQuery.prefetchAction()];

export default DashboardPage;
