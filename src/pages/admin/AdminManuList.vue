<template>
  <div class="row">
    <ul class="text-left">
      <li v-for="m in manufacturers"><router-link :to="'/admin/manufacturers/edit/' + m._id" class="nav-link">{{m.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'admin-manu-list',
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
