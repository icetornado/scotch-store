// ./src/components/product/ProductItem
<template>
  <div class="col-md-3">

    <b-card :title="product.name"
            :img-src="product.image"
            :img-alt="product.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
      <div class="product__description">
        <div class="product__info">
          <small v-if="product.manufacturer">{{product.manufacturer.name}}</small>
        </div>
        <div class="product__price-cart">
          ${{product.price}}
        </div>
      </div>
      <product-button :product="product" :isadmin="isadmin"></product-button>
    </b-card>
   </div>
</template>

<script>
  import ProductButton from '@/components/product/ProductButton';

  export default {
    name: 'product-item',
    props: ['product', 'isadmin'],
    components: {
      'product-button': ProductButton,
    },
  };
</script>
