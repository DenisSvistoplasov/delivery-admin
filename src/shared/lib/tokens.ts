import { createToken } from '@tramvai/core';
import type { OrderApiService } from '~entities/order/api/api';
import type { MenuApiService } from '~entities/menu/api/api';

export const ORDER_API_TOKEN = createToken<OrderApiService>('orderApi');
export const MENU_API_TOKEN = createToken<MenuApiService>('menuApi');
