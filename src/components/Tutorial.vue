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
        <li v-for="todo in todos">
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
  </div>
</template>

<script>
export default {
  name: 'Tutorial',
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

    };
  },
};
</script>
