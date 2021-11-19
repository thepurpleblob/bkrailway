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
  @font-face {
      font-family: "MoMA Sans Web Medium";
      font-display: auto;
      src: local("MoMA Sans Web Medium"), url("assets/fonts/Moma.woff");
  }

#app {
  font-family: "MoMA Sans Web Medium";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
