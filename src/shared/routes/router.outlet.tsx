import HomeContainer from "../../modules/home/container";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CommonLayout from "../layout/common-layout/common-layout";

export default function Outlet() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/:anchor?" element={<HomeContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
