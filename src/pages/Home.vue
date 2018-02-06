// ./src/pages/Home
<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> In Stock</h1>
    </div>

    <product-list></product-list>

    <counter-div></counter-div>
  </div>
</template>

<script>
  import ProductList from '@/components/product/ProductList';
  import CounterDiv from '@/components/counter/Counter';

  export default {
    name: 'home',
    components: {
      CounterDiv,
      ProductList,
    },
  };

</script>
