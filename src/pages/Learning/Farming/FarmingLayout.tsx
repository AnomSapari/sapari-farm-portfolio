import { Outlet } from "react-router-dom";

export default function FarmingLayout() {
  return (
    <div>
      {/* nanti bisa isi sub-menu farming di sini */}
      <Outlet />
    </div>
  );
}
