const routes = [
  {
    path: ["/Home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/About"],
    exact: true,
    component: "About",
  },
  {
    path: ["/Mission"],
    exact: true,
    component: "Mission",
  },
  {
    path: ["/Product"],
    exact: true,
    component: "Product",
  },
  {
    path: ["/Signup"],
    exact: true,
    component: "Signup",
  },
  {
    path: ["/","/Login"],
    exact: true,
    component: "Login",
  },
  {
    path: ["/EntrepriseDashboard"],
    exact: true,
    component: "EntrepriseDashboard",
  },
  {
    path: ["/IndividualDashboard"],
    exact: true,
    component: "IndividualDashboard",
  },
  {
    path: ["/ChatRoom"],
    exact: true,
    component: "ChatRoom",
  },
  {
    path: ["/ChatRoomRes"],
    exact: true,
    component: "ChatRoomRes",
  },
  {
    path: ["/RasControl"],
    exact: true,
    component: "RasControl",
  },
  {
    path: ["/Text2speech"],
    exact: true,
    component: "Text2speech",
  },
];

export default routes;
