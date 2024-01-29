export const MenuList = [
  { name: "Home", link: "/", icon: "" },
  { name: "About", link: "/pages/about-us", icon: "" },
  {
    name: "Services",
    link: "#",
    icon: "",
    margin: false,
    submenu: [
      {
        name: "Digital Marketing",
        link: "/pages/services/digital-marketing",
        icon: "",
      },
      {
        name: "Web and App Development",
        link: "/pages/services/web-mobile-app",
        icon: "",
      },
    ],
  },

  {
    name: "Products",
    link: "#",
    icon: "",
    margin: false,
    submenu: [
      {
        name: "SAP Tool",
        link: "/pages/products",
        icon: "",
      },
      {
        name: "Edumatic",
        link: "/pages/products/integrated-school",
        icon: "",
      },
    ],
  },
  // { name: "Contact Us", link: "/", icon: "" },
  // { name: "Clients", link: "/", icon: "" },
  // { name: "schedule a meeting", link: "/", icon: "", margin: false },
];
