<template>
 <div class="tutorial">
    {{message}}
    <div id='app-2'>
      <span v-bind:title="hoverer">
        Hover over me for a dynamically bound title!
      </span>
    </div>
    <div id="app-3">
      <span v-if="seen">Now you see me</span>
    </div>
    <div id="app-4">
      <ol>
        <li
         v-for="todo in todos">
          {{ todo.text }}
          }
        </li>
      </ol>
    </div>
    <div id='app-5'>
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    <div id='app-6'>
      <!-- Power Revealed -->
      <p>{{ message }}</p>
      <input v-model="message">
    </div>
    <div id="app-7">
      <ol>
        <TodoItem
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id">
        </TodoItem>
      </ol>
    </div>
    <hr>
  </div>
</template>

<script>
// creating a no unussed vars lint error
import TodoItem from '@/components/TodoItem';

export default {
  name: 'Tutorial',
  components: {
    TodoItem,
  },
  methods: {
    reverseMessage: function reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
  },

  data() {
    const accessed = `this was accessed on ${new Date().toLocaleString()}`;
    return {
      message: 'this is the vuejs tutorial',
      hoverer: accessed,

      // app-3 only went invisible in Vue dev tools
      seen: true,
      todos: [{ text: 'Learn JS' },
        { text: 'Learn Vue' },
        { text: 'build something awesome' },
      ],
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' },
      ],

    };
  },
};
</script>
