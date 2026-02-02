export const mainMenu = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Learning',
    children: [
      { label: 'Dashboard', path: '/learning' },
      { label: 'Farming', path: '/learning/farming' },
      { label: 'Coding', path: '/learning/coding' },
      { label: 'Resources', path: '/learning/resources' },
    ],
  },
  {
    label: 'Skills & Portfolio',
    children: [
      { label: 'Skills', path: '/skills' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Skill + Portfolio', path: '/skill-portfolio' },
    ],
  },
  {
    label: 'Produk & Tools',
    children: [
      { label: 'Produk', path: '/products' },
      { label: 'Cara Pesan', path: '/cara-pesan' },
      {
        label: 'Kalkulator Pakan',
        path: '/learning/farming/kalkulator', // ⬅️ FIX 404
      },
    ],
  },
  {
    label: 'Kontak',
    path: '/contact',
  },
];
