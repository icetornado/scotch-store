<template>
  <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
</template>


<script>
  import ProductForm from '@/components/product/ProductForm';

  export default {
    name: 'admin-new',
    data() {
      return {
        model: {
          manufacturer: {},
        },
      };
    },
    created() {
      if (!this.model.name) {
        console.log('dispatched');
        this.$store.dispatch('productById', this.$route.params.id);
      }
      if (this.manufacturers.length === 0) {
        this.$store.dispatch('allManufacturers');
      }
    },
    computed: {
      manufacturers() {
        return this.$store.getters.allManufacturers;
      },
    },
    methods: {
      addProduct(model) {
        console.log('model in new', model);
        this.$store.dispatch('addProduct', model);
      },
    },
    components: {
      'product-form': ProductForm,
    },
  };
</script>

<style scoped>

</style>
