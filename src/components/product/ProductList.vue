<template>
    <div class="container-fluid">
      <div class="row">
        <template v-for="product in products">
          <product-item :product="product" :isadmin="isadmin"></product-item>
        </template>
      </div>
    </div>

</template>

<script>
  import ProductItem from '@/components/product/ProductItem';

  export default {
    name: 'product-list',
    created() {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts');
      }
    },
    computed: {
      products() {
        console.log('getter products', this.$store.getters.allProducts);
        return this.$store.getters.allProducts;
      },
    },
    components: {
      'product-item': ProductItem,
    },
    props: ['isadmin'],
  };
</script>
