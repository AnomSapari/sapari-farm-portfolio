export type Role = "user" | "admin";

export type SubMenu = {
  label: string;
  to: string;
  roles?: Role[];
};

export type MenuItem = {
  label: string;
  to?: string;
  children?: SubMenu[];
  roles?: Role[];
};

export const menuData: MenuItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },

  {
    label: "Showcase",
    children: [
      { label: "Skills", to: "/skills" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Skill + Portfolio", to: "/skill-portfolio" },
    ],
  },

  {
   label: 'Learning',
  children: [
    { label: 'Coding', to: '/learning/coding' },
    { label: 'Resources', to: '/learning/resources' },
    { label: 'Farming', to: '/learning/farming' },
    { label: 'Jurnal Ternak', to: '/learning/farming/jurnal' },
    { label: 'Perjalanan', to: '/learning/farming/perjalanan' },
    { label: 'Kalkulator Pakan', to: '/learning/farming/kalkulator' },
  ],
},

  {
    label: "Products",
    children: [
      { label: "Produk", to: "/products" },
      { label: "Cara Pesan", to: "/cara-pesan" },
    ],
  },

  {
    label: "Admin",
    to: "/admin",
    roles: ["admin"],
  },

  { label: "Contact", to: "/contact" },
];
