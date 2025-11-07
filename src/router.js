import { Router } from "@vaadin/router";
import "/src/components/views/home.js";
import "/src/components/views/locations.js";
import "/src/components/views/myaccount.js";

const routes = [
  {
    path: "/",
    component: "dw-home",
  },
  {
    path: "/locations",
    component: "dw-locations",
  },
  {
    path: "/myaccount",
    component: "dw-myaccount",
  },
    path: "/instructors",
    component: "dw-instructors",  
  }   ,  

  { path: "(.*)", redirect: "/" },
];

window.addEventListener("DOMContentLoaded", () => {
  const outlet = document.getElementById("outlet");
  const router = new Router(outlet);
  router.setRoutes(routes);
});
