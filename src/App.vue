<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link to="/about">about</router-link>
    </div>
    <router-view />
    <div class="dev">
      /github-actions-demo/
      VUE_ADMIN_TEMPLATE
      111
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
