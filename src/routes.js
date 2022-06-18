import Dashboard from "layouts/dashboard";
import History from "layouts/history";

import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "History",
    key: "history",
    route: "/history",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: History,
    noCollapse: true,
  }
];

export default routes;
