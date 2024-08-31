import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, } from "@/pages/dashboard";
import Tables from "./pages/dashboard/database";
import Pricing from "../src/pages/dashboard/pricing";
import Tutorial from "../src/pages/dashboard/tutorials";
import Faqs from "../src/pages/dashboard/faqs";
import Recording from "../src/pages/dashboard/recording";
import SummaryGenerator from "../src/pages/dashboard/summaryGenerator";
import ForgotPassword from "../src/pages/auth/forgotPassword"
// import { SignIn, SignUp } from "@/pages/auth";
import { AiTwotoneAudio } from "react-icons/ai";
import { FaMoneyBill, FaQq, FaQuestion, FaStumbleupon } from "react-icons/fa";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "overview",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
  
      {
        icon: <FaStumbleupon {...icon} />,
        name: "summary generator",
        path: "/summaryGenerator",
        element: <SummaryGenerator />,
      },  {
        icon: <AiTwotoneAudio {...icon} />,
        name: "recording",
        path: "/recording",
        element: <Recording />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "database",
        path: "/patientData",
        element: <Tables />,
      },

    ],
  },

  {
    title: 'generals',
    layout: "dashboard",
    pages: [
          {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "tutorials",
        path: "/tutorials",
        element: <Tutorial />,
      },
      {
        icon: <FaMoneyBill {...icon} />,
        name: "pricing",
        path: "/pricing",
        element: <Pricing />,
      }, {
        icon: <FaQuestion {...icon} />,
        name: "faq's",
        path: "/faqs",
        element: <Faqs />,
      },
    ]
  },

]

export default routes;
