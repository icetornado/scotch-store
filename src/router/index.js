import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import AdminIndex from '@/pages/admin/AdminIndex';
import AdminNew from '@/pages/admin/AdminNew';
import Cart from '@/pages/Cart';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: AdminNew,
        },
        /*{
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }*/
      ],
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
