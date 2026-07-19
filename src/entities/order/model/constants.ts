export const ORDER_STATUS_MAP: Record<number, string> = {
  0: 'Принят',
  1: 'Готовится',
  2: 'Доставляется',
  3: 'Выполнен',
  4: 'Отменён',
} as const;

export const ORDER_STATUS_BG_COLOR: Record<number, string> = {
  0: '#ff5',
  1: '#6bf',
  2: '#fa5',
  3: '#3f7',
  4: '#f76',
} as const;
