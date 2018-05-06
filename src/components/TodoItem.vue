<template>
  <div class='TodoItem'>
      <!-- reference a prop's property -->
      <li>{{ todo.text }}</li>
  </div>


</template>

<script>
export default {
  // define a prop here
  props: ['todo'],
  data() {
    return {

    };
  },
};
</script>
