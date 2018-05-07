
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ],
    safelyStoredNumber: 0,
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },
    safelyStoredNumber(state) {
      return state.safelyStoredNumber;
    },
    storedNumberMatches(state) {
      return (matchNumber) => {
        return state.safelyStoredNumber === matchNumber;
      };
    },
  },
  mutations: {
    addTodo(state, text) {
      state.todos.push(
        { id: state.todos.length, text, done: false },
      );
    },
    incrementStoredNumber(state) {
      state.safelyStoredNumber++;
    },
    setStoredNumber(state, newNumber) {
      state.safelyStroedNumber = newNumber;
    },
  },
},
);
