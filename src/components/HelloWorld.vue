<style scoped>
  .btn {
    font-size: 18px;
    min-width: 3rem;
    min-height: 2rem;
    padding: 1rem;
  }

  .btn-success {
    background-color: lightgreen;
  }

  .btn-danger {
    background-color: lightcoral;
  }
</style>

<template>
  <div class="hello">
    <h1>Clicked {{ $store.state.count }} times, count is {{ evenOrOdd }}</h1>
    <button class="btn btn-success" @click="increment">+</button>
    <button class="btn btn-danger" @click="decrement">-</button>
    <button class="btn" @click="incrementIfOdd">+ if odd</button>
    <button class="btn" @click="incrementAsync">+ async</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },

    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
    ]),

    computed: mapGetters([
      'evenOrOdd',
    ]),
  };
</script>
