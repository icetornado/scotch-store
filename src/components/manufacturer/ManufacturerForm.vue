<template>
  <div class="container-fluid">
    <form>
      <div class="form-group row">
        <label>Manufacturer</label>
        <input type="text" placeholder="Manufacturer" v-model="manu.name" v-validate="'required'" name="name" :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>

      <div class="form-group row">
        <div v-if="isEditing">
          <button class="button badge-pill" v-on:click.prevent="saveManu">&nbsp;
            <span class="oi oi-check"></span>
            Update
          </button>
          <button class="button badge-pill" v-on:click.prevent="deleteManu">&nbsp;
            <span class="oi oi-trash"></span>
            Delete
          </button>
        </div>
        <div v-else>
          <button class="button badge-pill">
            <span class="oi oi-plus" v-on:click.prevent="saveManu"></span>&nbsp;
            Add
          </button>
        </div>
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
    computed: {
      manu() {
        return Object.assign({}, this.$store.getters.manufacturerById(this.$route.params.id));
      },
      isEditing() {
        console.log('is edit: ', this.$route.name === 'Edit Manufacturer');
        return this.$route.name === 'Edit Manufacturer';
      },
    },
    methods: {
      saveManu() {
        console.log('saving manu');
        this.$validator.validateAll().then(() => {
          // this.$emit(UPDATE_MANUFACTURER, this.manufacturer);
          this.$store.dispatch('updateManufacturer', this.manu);
        }).catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.',
          });
        });
      },
    },
  };
</script>

<style scoped>

</style>
