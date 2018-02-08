<template>
  <div>
    <div v-if="isadmin">
      <button class="button badge-pill badge-secondary" >
        <router-link :to="'/admin/products/edit/'+product._id">
          <span class="oi oi-pencil"></span>&nbsp;Edit
        </router-link>
      </button>
    </div>
    <div v-else>
      <button class="button badge-pill badge-primary" @click="addToCart"><span class="oi oi-cart"></span>&nbsp;Add to Cart</button>
      <!--
      <button v-if="isAdding" class="button" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
      <button v-else class="button button-danger" @click="removeFromCart(product._id)"><i class="fa fa-trash"></i> Remove from Cart</button>
      -->
    </div>

  </div>
</template>

<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
  } from '../../store/mutation-types';

  export default {
    props: ['product', 'isadmin'],
    data() {
      return {
        cart: this.$store.state.cart,
      };
    },
    computed: {
      isAdding() {
        return this.cart.indexOf(this.product) < 0;
      },
    },
    methods: {
      addToCart() {
        this.$store.commit(ADD_TO_CART, this.product);
      },
      removeFromCart(id) {
        this.$store.commit(REMOVE_FROM_CART, id);
      },
    },
  };

</script>
