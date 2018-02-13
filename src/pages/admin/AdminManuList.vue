<template>
  <b-container fluid>
    <b-row>
      <b-list-group>
        <b-list-group-item v-for="m in manufacturers" :key="m._id"><router-link :to="'/admin/manufacturers/edit/' + m._id" class="nav-link">{{m.name}}</router-link></b-list-group-item>
      </b-list-group>
    </b-row>
  </b-container>
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
