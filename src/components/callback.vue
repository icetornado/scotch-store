<template>
  <div>It is empty here</div>
</template>

<script>
  import { setIdToken, setAccessToken } from '../../utils/auth';

  export default {
    name: '',
    mounted() {
      this.$nextTick(() => {
        setAccessToken();
        setIdToken();
        window.location.href = '/';
        // this.$router.push('/');
      });
    },
  };
</script>

<style scoped>

</style>
