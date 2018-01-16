import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import AdminIndex from '@/pages/admin/AdminIndex';
import AdminNew from '@/pages/admin/AdminNew';
import AdminProducts from '@/pages/admin/AdminProducts';
import AdminEdit from '@/pages/admin/AdminEdit';
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
          path: 'products', /* default landing page of admin */
          name: 'Products',
          component: AdminProducts,
        },
        {
          path: 'new',
          name: 'New',
          component: AdminNew,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: AdminEdit,
        },
      ],
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
