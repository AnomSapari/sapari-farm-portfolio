import type { MenuItem, Role } from "./menuData";

export function filterMenuByRole(
  menu: MenuItem[],
  role: Role
): MenuItem[] {
  return menu
    .filter((item) => !item.roles || item.roles.includes(role))
    .map((item) => ({
      ...item,
      children: item.children?.filter(
        (child) => !child.roles || child.roles.includes(role)
      ),
    }))
    .filter(
      (item) => item.to || (item.children && item.children.length > 0)
    );
}
