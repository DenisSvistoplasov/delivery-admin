import { createQuery } from '@tramvai/react-query';
import { ORDER_API_TOKEN } from '~shared/lib/tokens';

export const getOrdersQuery = createQuery({
  key: ['getOrders'],

  deps: {
    api: ORDER_API_TOKEN,
  },

  conditions: { timeout: 3000 },

  async fn() {
    return this.deps.api.getOrders();
  },
});
