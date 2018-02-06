<template>
    <h4>Counter: {{count}}</h4>
</template>

<script>
  export default {
    name: 'CounterDiv',
    computed: {
      count() {
        return this.$store.state.cart.length;
      },
    },
  };
</script>

<style scoped>

</style>
