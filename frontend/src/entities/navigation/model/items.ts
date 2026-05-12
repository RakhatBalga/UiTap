export const NAV_ITEMS = [
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'list', label: 'List' },
  { id: 'favorites', label: 'Favorites' },
] as const

export type NavItemId = (typeof NAV_ITEMS)[number]['id']
