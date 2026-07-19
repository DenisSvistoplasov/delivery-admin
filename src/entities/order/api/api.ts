import { BaseApi } from '~shared/api/base-api';
import type { Order } from '../model/types';

export class OrderApiService extends BaseApi {
  async getOrders() {
    return this.request<Order[]>('orders');
  }
}
