<template>
  <div class='Vuex'>
    <p>The Safely stored number: {{ doneTodosCount }} </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// https://vuex.vuejs.org/en/intro.html
// https://alligator.io/vuejs/intro-to-vuex/
export default {
  data() {
    return {
      count: 0,
    };
  },

  computed: {
    ...mapGetters([
      'doneTodosCount',
    ]),
  },

  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
