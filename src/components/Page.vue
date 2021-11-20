<template>
    <div>
        <h2>{{ $route.params.slug }}</h2>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Page',
  props: {
  },
  data:function() {
      return {
          wwwroot: '',
      }
  },
  mounted() {
        const token = process.env.VUE_APP_TOKEN
        const api = process.env.VUE_APP_API
        this.wwwroot = process.env.VUE_APP_ROOT

        const v = this

        // front page blocks
        axios.get(api + 'collections/get/FrontPageItems?token=' + token)
        .then(response => {
            v.pageitems = response.data.entries
            let evenblock = true
            v.pageitems.forEach(pageitem => {
                pageitem.style = 'background:' + pageitem.Color
                pageitem.evenblock = evenblock
                evenblock = !evenblock
            })
        })

        // front page banner
        axios.get(api + 'singletons/get/FrontPageBanner?token=' + token)
        .then(response => {
            v.banner = response.data
        })
  }
}
</script>

<style lang="sass">
    
</style>