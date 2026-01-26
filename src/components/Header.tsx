import { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

import DesktopNav from './layout/header/DesktopNav';
import { MobileDrawer } from './layout/header/MobileDrawer';

export function Header() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-gray-950/90 backdrop-blur border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-bold text-white">
          Sapari Farm
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          onClick={() => setOpenMobile(prev => !prev)}
          className="lg:hidden p-2 text-gray-300"
        >
          <IconMenu2 className="w-7 h-7" />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <MobileDrawer
        open={openMobile}
        onClose={() => setOpenMobile(false)}
      />
    </header>
  );
}
