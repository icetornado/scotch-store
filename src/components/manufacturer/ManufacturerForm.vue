<template>
  <div class="container-fluid">
    <form v-on:submit.prevent>
      <div class="form-group row">
        <label>Manufacturer</label>
        <input type="text" placeholder="Manufacturer" v-model="manufacturer.name" v-validate="'required'" name="name" :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>

      <div class="form-group row">

          <button v-if="isEditing" class="button badge-pill" v-on:click.prevent="saveManu">
            <span class="oi oi-check"></span>&nbsp;Update
          </button>
          <button v-else class="button badge-pill" v-on:click.prevent="addManu">
            <span class="oi oi-plus"></span>&nbsp;Add
          </button>
          <button class="button badge-pill" v-if="isEditing" v-on:click.prevent="deleteManu">
            <span class="oi oi-trash"></span>&nbsp;Delete
          </button>

      </div>
    </form>
  </div>
</template>

<script>
  import {
    // eslint-disable-next-line
    ERROR_MSG,
    // UPDATE_MANUFACTURER,
  } from '../../store/mutation-types';

  export default {
    name: 'manufacturer-form',
    created() {
      const manufacturers = this.$store.getters.allManufacturers;
      if (manufacturers.length === 0) {
        this.$store.dispatch('allManufacturers');
      }
      /* if (typeof this.$route.params.id !== 'undefined') {
        this.$store.dispatch('manufacturerById', this.$route.params.id);
      } */
    },
    computed: {
      isEditing() {
        console.log('is edit: ', this.$route.name === 'Edit Manufacturer');
        return this.$route.name === 'Edit Manufacturer';
      },
      manufacturer() {
        // return state.manufacturer;
        const manu = this.$store.getters.manufacturerById(this.$route.params.id);
        if (manu) {
          return Object.assign({}, manu);
        }
        return { name: '' };
      },
    },
    methods: {
      saveManu() {
        console.log('saving manu');
        const router = this.$router;
        this.$validator.validateAll().then(() => {
          // this.$emit(UPDATE_MANUFACTURER, this.manufacturer);
          this.$store.dispatch('updateManufacturer', this.manufacturer).then(() => {
            router.push('/admin/manufacturers');
          });
        }).catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.',
          });
        });
      },
      addManu() {
        console.log('adding manu');
        const router = this.$router;
        this.$validator.validateAll().then(() => {
          this.$store.dispatch('addManufacturer', this.manufacturer).then(() => {
            router.push('/admin/manufacturers');
          });
        }).catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.',
          });
        });
      },
      deleteManu() {
        // eslint-disable-next-line
        console.log('delete manu with id', this.manufacturer._id);
        const router = this.$router;
        // eslint-disable-next-line
        this.$store.dispatch('deleteManufacturer', this.manufacturer._id).then(() => {
          console.log('i want to go somewhere');
          router.push('/admin/manufacturers');
        });
      },
    },
  };
</script>

<style scoped>

</style>
