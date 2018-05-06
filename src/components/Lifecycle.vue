<template>
  <div class='Lifecycle'>
    <p>{{ loading }}</p>
    <p>{{ mounting }}</p>
    <p>{{ counter  }}</p>
  </div>
</template>

<script>

// https://alligator.io/vuejs/component-lifecycle/
// https://scotch.io/tutorials/demystifying-vue-lifecycle-methods
export default {

  beforeCreate: () => {
    // Except for [HMR] Waiting for update signal from WDS...
    console.log('Nothing gets called before me!');
  },

  data() {
    return {
      loading: 'loading...',
      mounting: 'mounting...',
      counter: 0,
    };
  },

  // created is best suited for fetching data
  created() {
    console.log('on created i can access a loading string ' + this.loading);
    this.loading = 'loaded!';

    setInterval(() => {
      this.counter++;
    }, 1000);
  },

  // all client from here
  beforeMount() {
    console.log('i am ' + this.mounting);
  },

  mounted() {
    this.mounting = 'mounted';
    console.log('i am ' + this.mounting);
  },

  beforeUpdate() {
    console.log(this.counter);
  },

  /*
  beforeCreate:
  created:
  beforeMount:
  mounted:
  - beforeUpdate
  - updated
  beforeDestroy
  destroyed-
  */

};
</script>
