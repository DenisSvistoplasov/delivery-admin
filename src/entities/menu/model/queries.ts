import { createQuery } from '@tramvai/react-query';
import { MENU_API_TOKEN } from '~shared/lib/tokens';

export const getMenuQuery = createQuery({
  actionNamePostfix: 'getMenu',
  key({ page, limit }: { page: number; limit: number }) {
    return ['getMenu', page, limit];
  },

  async fn(params: { page: number; limit: number }) {
    return this.deps.api.getMenu(params);
  },

  deps: {
    api: MENU_API_TOKEN,
  },
});
