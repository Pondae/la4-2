import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import PassengerLayout from "@/views/passenger/Layout.vue"
import PassengerDetails from "../views/passenger/Details.vue";
import PassengerAirlineDetails from "../views/passenger/AirlineDetails.vue";
import NotFound from "@/views/NotFound.vue";
import EditDetails from "@/views/passenger/Edit.vue";
import NProgress from 'nprogress'
import PassengerService from '@/services/PassengerService.js'
import GStore from '@/store'

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
    beforeEnter: (to) => {
      return PassengerService.getPassenger(to.params.id)
        .then(response => {
          GStore.passenger = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404 ){
            return {
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError'}
          }
        })
    },
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
      {
        path: 'edit',
        name: 'EditDetails',
        component: EditDetails
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
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router;
