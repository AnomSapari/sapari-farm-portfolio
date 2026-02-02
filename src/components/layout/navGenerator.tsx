import type { MenuItem } from "./menuData";

/**
 * Generic navigation generator
 * - Tidak mengubah struktur menu
 * - Bisa dipakai Desktop & Mobile
 * - Type-safe
 */
export function navGenerator<T extends MenuItem>(
  items: T[],
  renderItem: (item: T, index: number) => JSX.Element
) {
  return items.map((item, index) => renderItem(item, index));
}
