<template>
  <div class='Vuex'>
    <p>Todo Items that are complete: {{ doneTodosCount }} </p>
    <p>Safely Stored number: {{safelyStoredNumber }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
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
      'safelyStoredNumber',
    ]),
  },

  methods: {
    ...mapMutations([
      'addTodo',
      'incrementStoredNumber',
      'setStoredNumber',
    ]),
  },
};
</script>
