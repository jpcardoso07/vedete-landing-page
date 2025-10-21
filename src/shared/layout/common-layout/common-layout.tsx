import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#0f0f0f] overflow-hidden">
      <Navbar />

      <main
        id="main_content"
        className="overflow-y-auto overflow-x-hidden w-screen flex flex-col"
      >
        <Outlet />
      </main>
    </div>
  );
}
