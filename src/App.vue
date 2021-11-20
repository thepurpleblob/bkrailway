<template>
  <div id="app" class="container">
    <HeaderNav></HeaderNav>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
    import HeaderNav from '@/components/HeaderNav.vue'
    import Footer from '@/components/Footer.vue'

    export default {
    components: {
        HeaderNav,
        Footer
      }
    }
</script>


<style lang="scss">

</style>
