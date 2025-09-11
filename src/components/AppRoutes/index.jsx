import { HashRouter, Routes, Route } from "react-router";

//Pages
import {
  NotFoundPage,
  HomePage,
  ModalDemo,
  ScrollDemo,
  Profile,
} from "../../pages";

//Layouts
import { DefaultLayout } from "../../layouts";

function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="modal-demo" element={<ModalDemo />} />
          <Route path="scroll-demo" element={<ScrollDemo />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
