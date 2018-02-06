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
          path: 'products/new',
          name: 'New Product',
          component: AdminNew,
        },
        {
          path: 'products/edit/:id',
          name: 'Edit Product',
          component: AdminEdit,
        },
        {
          path: 'manufacturers',
          name: 'Manufacturers List',
          component: AdminEdit,
        },
        {
          path: 'manufacturers/new',
          name: 'New Manufacturer',
          component: AdminEdit,
        },
        {
          path: 'manufacturers/edit/:id',
          name: 'Edit Manufacturer',
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
