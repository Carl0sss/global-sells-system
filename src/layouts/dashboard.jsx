import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";
import navImg from "../../public/img/GlobalSellsImg.jpg";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('username');

  const onLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/auth/sign-in');
    console.log("Logout");
  };

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={navImg}
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar currentUser={currentUser} onLogout={onLogout} />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
