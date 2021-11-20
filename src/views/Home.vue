<template>
  <div class="home container">
      <HeaderNav></HeaderNav>
      <Content></Content>
      <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HeaderNav,
    Content,
    Footer
  }
}
</script>
