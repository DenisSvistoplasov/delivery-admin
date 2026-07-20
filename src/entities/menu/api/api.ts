import { BaseApi } from '~shared/api/base-api';
import type { Dish } from '../../dish/model/types';

export class MenuApiService extends BaseApi {
  async getMenu({ page, limit }: { page: number; limit: number }) {
    return this.request<Dish[]>(`menu?page=${page}&limit=${limit}`);
  }

  async updateDish(dish: Dish) {
    return this.request<Dish>(`menu/${dish.id}`, {
      method: 'PUT',
      body: JSON.stringify(dish),
    });
  }
}
