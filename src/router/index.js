import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Tutorial from '@/components/Tutorial';
import TodoItem from '@/components/TodoItem';
import Lifecycle from '@/components/Lifecycle';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial,
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle',
      component: Lifecycle,
    },

  ],
});
