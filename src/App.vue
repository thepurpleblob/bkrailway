<template>
  <div id="app" class="container">
    <HeaderNav></HeaderNav>
    <Content></Content>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
