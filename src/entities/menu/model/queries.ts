import { createMutation, createQuery } from '@tramvai/react-query';
import type { Dish } from '~entities/dish/model/types';
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

  queryOptions: {
    staleTime: 5 * 60 * 1000,
  },
});

export const updateDishMutation = createMutation({
  key: 'updateDish',

  async fn(_, dish: Dish) {
    return this.deps.api.updateDish(dish);
  },

  deps: {
    api: MENU_API_TOKEN,
  },

  mutationOptions: {
    onSuccess(data, variables, onMutateResult, context) {
      context.client.invalidateQueries({ queryKey: ['getMenu'] });
    },
  },
});
