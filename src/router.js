import { Router } from "@vaadin/router";
import "/src/components/views/home.js";
import "/src/components/views/locations.js";

const routes = [
  {
    path: "/",
    component: "dw-home",
  },
  {
    path: "/locations",
    component: "dw-locations",
  },
  { path: "(.*)", redirect: "/" },
];

window.addEventListener("DOMContentLoaded", () => {
  const outlet = document.getElementById("outlet");
  const router = new Router(outlet);
  router.setRoutes(routes);
});
