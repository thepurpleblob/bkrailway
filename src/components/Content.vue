<template>
  <div class="content">
      <div v-for="pageitem in pageitems" :key="pageitem._id" class="mt-1 rounded bg-light">
          <div class="row">
              <div class="col-7">
                  <h2>{{ pageitem.Heading }}</h2>
              </div>
              <div class="col-5">
                  <img :src="wwwroot + pageitem.Image.path" />
              </div>    
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Content',
  props: {
  },
  data:function() {
      return {
          pageitems: null,
          wwwroot: '',
      }
  },
  mounted() {
        const token = process.env.VUE_APP_TOKEN
        const api = process.env.VUE_APP_API
        this.wwwroot = process.env.VUE_APP_ROOT

        const v = this
        axios.get(api + 'collections/get/FrontPageItems?token=' + token)
        .then(response => {
            window.console.log(response)
            v.pageitems = response.data.entries
        })
  }
}
</script>