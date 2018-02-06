<template>
  <div>
    <div class="admin-new">
      <div class="container-fluid">

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- Links are to sibling routes -->
            <ul class="navbar-nav mr-auto">
              <li class="nav-item"><router-link to="/admin/products" class="nav-link">Products List</router-link></li>
              <li class="nav-item"><router-link to="/admin/products/new" class="nav-link">New Product</router-link></li>
              <li class="nav-item"><router-link to="/admin/manufacturers" class="nav-link">Manufacturers List</router-link></li>
              <li class="nav-item"><router-link to="/admin/manufacturers/new" class="nav-link">New Manufacturer</router-link></li>
            </ul>

          </nav>

        <!-- Outlet for children routes -->
        <p>THis is Admin</p>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'admin-index',
  };
</script>

<style scoped>

</style>
