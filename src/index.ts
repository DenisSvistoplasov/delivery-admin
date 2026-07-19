import { createApp } from '@tramvai/core';
import { COMBINE_REDUCERS, CommonModule } from '@tramvai/module-common';
import { SpaRouterModule } from '@tramvai/module-router';
import { RenderModule } from '@tramvai/module-render';
import { ServerModule } from '@tramvai/module-server';
import { ErrorInterceptorModule } from '@tramvai/module-error-interceptor';
import { SeoModule } from '@tramvai/module-seo';
import {
  RENDER_SLOTS,
  ResourceType,
  ResourceSlot,
  DEFAULT_LAYOUT_COMPONENT,
} from '@tramvai/tokens-render';
import { HeaderModule } from '~shared/header';
import { OrderApiService } from '~entities/order/api/api';
import { Layout } from '~widgets/layout/ui/Layout';
import { ReactQueryModule } from '@tramvai/module-react-query';
import { MENU_API_TOKEN, ORDER_API_TOKEN } from '~shared/lib/tokens';
import { MenuApiService } from '~entities/menu/api/api';
import { FavoriteDishesStore } from '~entities/dish/model/store';

createApp({
  name: 'delivery-admin',
  modules: [
    CommonModule,
    SpaRouterModule,
    RenderModule.forRoot({ useStrictMode: true }),
    SeoModule,
    ServerModule,
    ErrorInterceptorModule,
    HeaderModule,
    ReactQueryModule,
  ],
  providers: [
    {
      provide: RENDER_SLOTS,
      multi: true,
      useValue: {
        type: ResourceType.asIs,
        slot: ResourceSlot.HEAD_META,
        payload:
          '<meta name="viewport" content="width=device-width, initial-scale=1">',
      },
    },
    {
      provide: ORDER_API_TOKEN,
      useClass: OrderApiService,
    },
    {
      provide: MENU_API_TOKEN,
      useClass: MenuApiService,
    },
    {
      provide: DEFAULT_LAYOUT_COMPONENT,
      useValue: Layout,
    },
    {
      provide: COMBINE_REDUCERS,
      useValue: FavoriteDishesStore,
    },
  ],
});
