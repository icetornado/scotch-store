<template>
  <div>
    <div class="admin-new">
      <b-navbar variant="light" type="light" class="navbar-expand-lg" :sticky="sticky">

        <b-navbar-nav>
          <b-nav-item to="/admin/products">Products List</b-nav-item>
          <b-nav-item to="/admin/products/new">New Product</b-nav-item>
          <b-nav-item to="/admin/manufacturers">Manufacturers List</b-nav-item>
          <b-nav-item to="/admin/manufacturers/new">New Manufacturer</b-nav-item>
        </b-navbar-nav>

      </b-navbar>

        <!-- Outlet for children routes -->
        <b-container fluid>
          <router-view></router-view>
        </b-container>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'admin-index',
    // eslint-disable-next-line
    data: function () {
      return {
        sticky: true,
      };
    },
  };
</script>

<style scoped>

</style>
