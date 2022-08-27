import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Context/GlobalContext";
import Dashboard from "./Page/Dashboard/Layout/Dashboard";
import DashboardCreate from "./Page/Dashboard/Page/DashboardCreate";
import DashboardListData from "./Page/Dashboard/Page/DashboardListData";
import DashboardDetail from "./Page/Dashboard/Page/DashboardDetail";
import Clone from "./Component/Clone";
import DashboardHome from "./Page/Dashboard/Page/DashboardHome";
import DashboardManage from "./Page/Dashboard/Page/DashboardManage";
import Login from "./Page/Landingpage/Login/Login";
import ProctectedLogin from "./Page/Landingpage/Login/ProtectedLogin";
import ErrorPage from "./Page/Landingpage/ErrorPage/ErrorPage";
import Register from "./Page/Landingpage/Register/Register";
import ProtectToken from "./Page/Landingpage/Login/ProtectToken";
import DashboardChangePass from "./Page/Dashboard/Page/DashboardChangePass";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Clone />} />
            <Route
              path="/Login"
              element={
                <ProtectToken>
                  <Login />
                </ProtectToken>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectToken>
                  <Register />
                </ProtectToken>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProctectedLogin>
                  <Dashboard />
                </ProctectedLogin>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="List-Vacancy" element={<DashboardListData />} />
              <Route path="Create" element={<DashboardCreate />} />
              <Route path="Create/:idData" element={<DashboardCreate />} />
              <Route path="Manage" element={<DashboardManage />} />
              <Route path="Password" element={<DashboardChangePass />} />
              <Route path="detail/:idData" element={<DashboardDetail />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
