import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// config
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Lazy-loaded components
const Home = Loadable(lazy(() => import("../components/Home/Home")));
const Navbar = Loadable(lazy(() => import("../components/Home/Navbar")));
const DashboardLayout = Loadable(lazy(() => import("../layouts/dashboard")));
const GeneralApp = Loadable(lazy(() => import("../pages/dashboard/GeneralApp")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

export default function Router() {
  return (
    <Routes>
      {/* Home Page with Navbar */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      {/* Dashboard Layout with GeneralApp as its child */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<GeneralApp />} />
      </Route>

      {/* Redirect unknown routes to 404 */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
