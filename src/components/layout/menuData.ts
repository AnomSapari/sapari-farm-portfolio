export type SubMenu = {
  label: string;
  to: string;
};

export type MenuItem = {
  label: string;
  to?: string;
  children?: SubMenu[];
};

export const menuData: MenuItem[] = [
  {
    label: "Home",
    to: "/",
  },
   {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Skills & Portfolio',
    children: [
      { label: 'Skills', to: '/skills' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Skill + Portfolio', to: '/skill-portfolio' },
    ],
  },
  {
    label: 'Learning',
    children: [
      { label: 'Coding', to: '/learning/coding' },
      { label: 'Resources', to: '/learning/resources' },
      { label: 'Farming', to: '/learning/farming' },
      {
        label: 'Kalkulator Pakan',
        to: '/learning/farming/kalkulator',
      },
    ],
  },
   {
    label: 'Produk & Tools',
    children: [
      { label: 'Produk', to: '/products' },
      { label: 'Cara Pesan', to: '/cara-pesan' },
    ],
  },
  {
    label: 'Contact',
    to: '/contact',
  }, 
  
  
];
