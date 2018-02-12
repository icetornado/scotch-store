<template>
  <div>It is empty here</div>
</template>

<script>
  import { setIdToken, setAccessToken } from '../../utils/auth';
  // eslint-disable-next-line
  import Router from '../router';

  export default {
    name: '',
    mounted() {
      this.$nextTick(() => {
        setAccessToken();
        setIdToken();
        console.log('this store', this.$store);
        // window.location.href = '/';
        this.$router.push('/');
        // Router.push('/');
      });
    },
  };
</script>

<style scoped>

</style>
