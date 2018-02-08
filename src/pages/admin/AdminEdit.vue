<template>
  <div>
    <div class="title">
      <h1>This is Admin/Edit/{{$route.params.id}}</h1>
    </div>
    <product-form @save-product="updateProduct" :model="model" :manufacturers="manufacturers" :isEditing="1"></product-form>
  </div>
</template>
<script>
  import ProductForm from '@/components/product/ProductForm';

  export default {
    name: 'admin-edit',
    computed: {
      manufacturers() {
        console.log('getter manufacturers', this.$store.getters.allManufacturers);
        return this.$store.getters.allManufacturers;
      },
      model() {
        const productById = this.$store.getters.productById(this.$route.params.id);
        const productObj = Object.assign({}, productById);
        console.log('admin edit product', productObj);
        return productObj;
        // return productById;
      },
    },
    created() {
      console.log(this.$route.params.id); // prints value of :id

      if (!this.model.name) {
        console.log('dispatched to get product by id');
        this.$store.dispatch('productById', this.$route.params.id);
      }

      if (this.manufacturers.length === 0) {
        this.$store.dispatch('allManufacturers');
      }
    },
    methods: {
      updateProduct(model) {
        console.log('model in edit', model);
        this.$store.dispatch('updateProduct', model);
      },
    },
    props: {
      isadmin: true,
      isEditing: true,
    },
    components: {
      'product-form': ProductForm,
    },
  };
</script>

<style scoped>

</style>
