<template>
  <div class="content">

        <div v-if="banner.Enable" id="frontpagebanner" class="rounded shadow bg-secondary text-light">
            <div class="text-center row gx-4 mt-4" >
                <div class="col-12 p-4">
                    <span v-html="banner.Text"></span>
                </div>   
            </div>
        </div>

      <div v-for="pageitem in pageitems" :key="pageitem._id" >
          <div v-if="pageitem.evenblock" class="fp-block rounded shadow" :style="pageitem.style">
                <div class="row gx-4 mt-4" >
                    <div class="col-12 col-sm-6 p-4">
                        <h2>{{ pageitem.Heading }}</h2>
                        <span v-html="pageitem.Content"></span>
                    </div>
                    <div class="col-12 col-sm-6">
                        <img :src="wwwroot + pageitem.Image.path" class="img-fluid rounded float-end" />
                    </div>    
                </div>
          </div>
            <div v-else class="fp-block mt-1 rounded shadow" :style="pageitem.style">
                <div class="row gx-4 mt-4" >
                    <div class="col-12 col-sm-6">
                        <img :src="wwwroot + pageitem.Image.path" class="img-fluid rounded float-start" />
                    </div> 
                    <div class="col-12 col-sm-6 p-4">
                        <h2>{{ pageitem.Heading }}</h2>
                        <span v-html="pageitem.Content"></span>
                    </div>   
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
          banner: null,
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
    $fp-block-height: 400px

    .fp-block 
        height: $fp-block-height

        img
            height: $fp-block-height
    
</style>