<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <div class="container">
      <div class="row">
        <template v-for="product in cartList">

            <div class="col-sm-3" style="text-align: left;">
              <div>Name: <span class="badge badge-pill badge-primary">{{product.name}}</span></div>
              <div>Price: <span class="badge badge-pill badge-success">{{product.price}}</span></div>
              <div>Quantity: <span class="badge badge-pill badge-danger">{{product.count}}</span></div>
              <div>Description: </div>
              <div>{{product.description}}</div>

            </div>

        </template>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'cart',
    data() {
      return {
        msg: 'This is Cart Page',
      };
    },
    computed: {
      // eslint-disable-next-line
      cartList: function () {
        const cart = this.$store.state.cart.reduce((tally, item) => {
          console.log('item', item);
          // eslint-disable-next-line
          if(typeof tally[item._id] === 'undefined') {
            // eslint-disable-next-line
            tally[item._id] = Object.assign({}, item);
            // eslint-disable-next-line
            tally[item._id].count = 0;
          }
          // eslint-disable-next-line
          tally[item._id].count += 1;
          // tally[item._id] = (tally[item._id] || 0) + 1;
          return tally;
        }, {});
        console.log('consolidate cart', cart);
        return cart;
      },
    },
  };
</script>

<style scoped>

</style>
