<template>
  <div>
    <div v-if="isadmin">
      <b-button class="button badge-pill badge-secondary":to="'/admin/products/edit/'+product._id" >
          <span class="oi oi-pencil"></span>&nbsp;Edit
      </b-button>
    </div>
    <div v-else>
      <b-btn type="button" class="button badge-pill badge-primary" @click="addToCart"><span class="oi oi-cart"></span>&nbsp;Add to Cart</b-btn>
      <b-btn type="button" class="button badge-pill badge-primary" @click="showQuickViewModal"><span class="oi oi-magnifying-glass"></span>&nbsp;Quick View</b-btn>
    </div>

    <b-modal ref="quickViewModal" hide-footer title="Modal title" id="quickViewModal" aria-labelledby="modalTitle" aria-described="">
      <p class="my-4">Hello from modal!</p>
      <pre>{{product}}</pre>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideQuickViewModal">Close Me</b-btn>
    </b-modal>


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
        // isModalVisible: false,
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
      showQuickViewModal() {
        console.log('quick view');
        this.$refs.quickViewModal.show();
      },
      hideQuickViewModal() {
        this.$refs.quickViewModal.hide();
      },
    },
  };

</script>
