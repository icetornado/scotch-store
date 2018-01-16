<template>
  <div>
    <div class="title">
      <h1>This is Admin/Edit/{{$route.params.id}}</h1>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'admin-edit',
    created() {
      console.log(this.$route.params.id); // prints value of :id
    },
  };
</script>

<style scoped>

</style>
