<template>
  <div class="container-fluid">
  <form v-on:submit.prevent>
      <div class="form-group row">
        <label>Name</label>
        <input type="text" placeholder="Name" v-model="model.name" v-validate="'required'" name="name" :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
      </div>
      <div class="form-group row">
        <label>Price</label>
        <input type="number" class="form-control" placeholder="Price" v-model="model.price" v-validate="'required'" name="price" :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Price is required</span>
      </div>
      <div class="form-group row">
        <label>Manufacturer</label>
        <select class="form-control" v-model="model.manufacturer" v-validate="'required'" name="manufacturer"
          :class="{'form-control': true, 'error': errors.has('manufacturer') }">
          <option v-for="manufacturer in manufacturers" :key="manufacturer._id" :value="manufacturer">{{manufacturer.name}}</option>
        </select>

        <span class="small text-danger" v-show="errors.has('manufacturer')">Manufacturer is required</span>
      </div>

      <div class="form-group row">
        <label>Image</label>
        <input type="text" lass="form-control" placeholder="Image" v-model="model.image" v-validate="'required|url'" name="image" :class="{'form-control': true, 'error': errors.has('image') }" />
        <span class="small text-danger" v-show="errors.has('image')">Image is required and must be a valid URL</span>
      </div>
      <div class="form-group row">
        <label>Description</label>
        <textarea type="number" class="form-control" placeholder="Description" rows="5" v-model="model.description" v-validate="'required'" name="description" :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">Description is required</span>
      </div>
      <div class="form-group row">
          <b-btn type="button" class="button badge-pill bg-success" v-on:click.prevent="saveProduct">&nbsp;
            <span v-if="isEditing"><span class="oi oi-check"></span>Update</span>
            <span v-else><span class="oi oi-plus"></span>Add</span>
          </b-btn>&nbsp;
          <b-btn type="button" class="button badge-pill bg-danger" v-if="isEditing" v-on:click.prevent="deleteProduct">&nbsp;
            <span class="oi oi-trash"></span>
            Delete
          </b-btn>
      </div>

  </form>
  </div>
</template>

<script>
  import {
    // eslint-disable-next-line
    ERROR_MSG, UPDATE_PRODUCT,
  } from '../../store/mutation-types';

  export default {
    name: 'ProductForm',
    props: ['model', 'manufacturers', 'isEditing'],
    methods: {
      saveProduct() {
        console.log('save model in form', this.model);
        console.log('errors:', this.errors);

        /* if (this.errors.items.length === 0) {
          this.$emit('save-product', this.model);
        } */
        // console.log(this.fields.valid());
        this.$validator.validateAll().then(() => {
          this.$emit('save-product', this.model);
        }).catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.',
          });
        });
      },
      deleteProduct() {
        console.log('delete a product');
      },
    },
  };
</script>
