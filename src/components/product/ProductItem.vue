// ./src/components/product/ProductItem
<template>
  <div class="col-md-3">
    <div class="product">
      <router-link :to="'/details/'+product._id" class="product-link">
        <div class="product__image">
          <img
            class="img-responsive" :src="product.image" alt="">
        </div>
        <div class="product__description">
          <div class="product__info">

            <small v-if="product.manufacturer">{{product.manufacturer.name}}</small>

            <h4>{{product.name}}</h4>
          </div>
          <div class="product__price-cart">
            ${{product.price}}
          </div>
        </div>
      </router-link>
      <div class="product__action">
        <product-button :product="product" :isadmin="isadmin"></product-button>
      </div>
    </div>
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
