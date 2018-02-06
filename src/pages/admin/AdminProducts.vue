<template>
  <div>
    <div class="title">
      <h1>This is Admin/Products</h1>
    </div>
    <product-list isadmin="1"></product-list>
  </div>
</template>

<script>
  import ProductList from '@/components/product/ProductList';

  export default {
    components: { ProductList },
    name: 'admin-products',
  };
</script>

<style scoped>

</style>
