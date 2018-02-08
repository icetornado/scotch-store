<template>
    <div>
      <pre>{{manufacturers}}</pre>
    </div>
</template>

<script>
  export default {
    name: 'manufacturer-list',
    props: ['isadmin'],
    created() {
      if (this.manufacturers.length === 0) {
        this.$store.dispatch('allManufacturers');
      }
    },
    computed: {
      manufacturers() {
        console.log('getter manus', this.$store.getters.allManufacturers);
        return this.$store.getters.allManufacturers;
      },
    },
  };
</script>

<style scoped>

</style>
