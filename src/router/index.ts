import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import CountryDetail from "../pages/country-details";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: 'country/:name',
    Component: CountryDetail,
  },
]);

export default router;
