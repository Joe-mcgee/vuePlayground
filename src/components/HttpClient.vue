<template>
  <div class='HttpClient'>
    <p>{{ posts }}</p>
  </div>
</template>

<script>
import axios from 'axios';
// https://alligator.io/vuejs/rest-api-axios/

export default {
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  methods: {

  },

  async created() {
    const number = Math.floor(Math.random() * (9)) + 1;
    try {
      const res = await axios.get(`http://numbersapi.com/${number}/math`);
      this.posts = res.data;
    } catch (err) {
      this.errors.push(err);
    }
  },
};
</script>
