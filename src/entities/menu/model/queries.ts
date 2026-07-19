import { createQuery } from '@tramvai/react-query';
import { MENU_API_TOKEN } from '~shared/lib/tokens';

export const getMenuQuery = createQuery({
  key: ['getMenu'],

  deps: {
    api: MENU_API_TOKEN,
  },

  async fn() {
    return this.deps.api.getMenu();
  },
});
