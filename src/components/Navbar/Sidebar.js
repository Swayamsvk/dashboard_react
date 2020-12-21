import React from "react";
import * as FaIcons from "react-icons/fa";

//The sidebar component
export const Sidebar = [
  {
    title: "Dashboard",
    path: "/",
    icon: <FaIcons.FaRegBookmark />,
    cName: "nav-text",
  },
  {
    title: "Assets",
    path: "/",
    icon: <FaIcons.FaChartPie />,
    cName: "nav-text",
  },
  {
    title: "Tracker",
    path: "/",
    icon: <FaIcons.FaChartBar />,
    cName: "nav-text",
  },

  {
    title: "Planning & Advisory",
    path: "/",
    icon: <FaIcons.FaRegCalendarAlt />,
    cName: "nav-text",
  },
];
