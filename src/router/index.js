import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import PassengerLayout from "@/views/passenger/Layout.vue"
import PassengerDetails from "../views/passenger/Details.vue";
import PassengerAirlineDetails from "../views/passenger/AirlineDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/passenger/:id',
    name: 'PassengerLayout',
    props: true,
    component: PassengerLayout,
    children: [
      {
        path: 'detail',
        name: 'PassengerDetails',
        component: PassengerDetails
      },
      {
        path: 'airline',
        name: 'PassengerAirlineDetails',
        component: PassengerAirlineDetails
      },
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
