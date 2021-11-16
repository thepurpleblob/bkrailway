<template>
  <div class="content">

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
          pageitems: null
      }
  },
  mounted() {
        const token = process.env.VUE_APP_TOKEN
        const cms = process.env.VUE_APP_CMS

        const v = this
        axios.get(cms + 'collections/get/FrontPageItems?token=' + token)
        .then(response => {
            window.console.log(response)
            v.pageitems = response.data
        })
  }
}
</script>