<template>
    <div class="row justify-content-sm-center mt-4">
        <div class="col-12 col-sm-7">
            <span v-html="content"></span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

function update(v) {
    const token = process.env.VUE_APP_TOKEN
    const api = process.env.VUE_APP_API
    v.wwwroot = process.env.VUE_APP_ROOT

    const slug = v.$route.params.slug

    // front page banner
    axios.get(api + 'singletons/get/' + slug + '?token=' + token)
    .then(response => {
        window.console.log(response)
        v.content = response.data.Content
    })
    .catch(error => {
        window.console.log(error)
    })
}

export default {
  name: 'SinglePage',
  props: {
  },
  watch: {
      $route() {
          update(this)
      }
  },
  data:function() {
      return {
          wwwroot: '',
          content: ''
      }
  },
  mounted() {
      update(this)
  }
}
</script>

<style lang="sass">
    
</style>