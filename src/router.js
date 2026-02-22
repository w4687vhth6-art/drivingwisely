import { Router } from "@vaadin/router";
import "/src/components/views/home.js";
import "/src/components/views/locations.js";
import "/src/components/views/myaccount.js";
import "/src/components/views/instructors.js";
import "/src/components/views/booking.js";
import "/src/components/views/about.js";
import "/src/components/views/map.js";
import "/src/components/views/instructor-signup.js";

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
  {
    path: "/instructors",
    component: "dw-instructors",
  },
  {
    path: "/booking",
    component: "dw-booking",
  },
  {
    path: "/map",
    component: "dw-map",
  },
  {
    path: "/about",
    component: "dw-about",
  },
  {
    path: "/instructor-signup",
    component: "dw-instructor-signup",
  },
  { path: "(.*)", redirect: "/" },
];

window.addEventListener("DOMContentLoaded", () => {
  const outlet = document.getElementById("outlet");
  const router = new Router(outlet);
  router.setRoutes(routes);
});
