import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,XMarkIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications,Newuser,Reports,Expenditure } from "./pages/dashboard";
import { useContext } from "react";
import { whoContext } from "./context/whocontext";
import Book from "./pages/Book";

const icon = {
  className: "w-5 h-5 text-inherit",
};
const Routes=()=>{
  const{who,setwho}=useContext(whoContext);

  console.log(who);
}


export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Collectioners",
        path: "/Collectioners",
        element: <Tables />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Users",
        path: "/Users",
        element: <Notifications />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "New User",
        path: "/newuser",
        element: <Newuser />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Reports",
        path: "/reports",
        element: <Reports />,
      },
      {
        icon: <XMarkIcon {...icon} />,
        name: "Expenditure",
        path: "/expenditure",
        element: <Expenditure />,
      }
    ],
  },
  {
    // title: "auth pages",
    layout: "dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "Users",
        path: "/Users",
        element: <Notifications />,
      },
      {
        icon: <XMarkIcon {...icon} />,
        name: "Expenditure",
        path: "/expenditure",
        element: <Expenditure />,
      }
    ],
  },
  {
    // title: "auth pages",
    layout: "dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "MyBook",
        path: "/book",
        element: <Book />,
      },
    ],
  },
];

export default routes;
