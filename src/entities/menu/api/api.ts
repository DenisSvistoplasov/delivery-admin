import { BaseApi } from '~shared/api/base-api';
import type { Dish } from '../../dish/model/types';

export class MenuApiService extends BaseApi {
  async getMenu() {
    return this.request<Dish[]>('menu');
  }
}
