<template>
  <div class="praktika">
    <h1>Praktika blogi</h1>
  </div>
  <ul>
    <li v-for="blogi in blogid">
      <Blogi :name="blogi.name" :alltekst="blogi.alltekst" :link="blogi.link" :pilt="load_img(blogi.name)" />
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import Blogi from '@/components/Blogi.vue'

export default {
  name: 'Praktika',
  components: {
      Blogi
  },
  data () {
    return {
      blogid: []
    }
  },
  created () {
    axios
      .get('https://uttraineeshipblog.com/wp-json/wp/v2/posts?_fields=excerpt%2Ctitle%2Clink%2Cmedia&per_page=100')
      .then(response => {
        response.data.forEach((post) => {
          let blogpost = {}
          blogpost.name = post.title.rendered
          blogpost.alltekst = post.excerpt.rendered
          blogpost.link = post.link
          this.blogid.push(blogpost)
        })
      }
    )
  },
  methods: {
    load_img: function(name) {
      try {
        return require('../assets/' + name + '.jpg')
      } catch {
        return require('../assets/UT.png')
      }
    }
  }
}
</script>

<style scoped>
.praktika h1 {
  padding-left: 60px;
  font-size: 40px;
  text-align: left;
  color: white;
}

ul {
  list-style-type: none;
  justify-content: center;
  padding-left: 0px;
  columns: 3;
}

img {
    width: 350px;
    height: 220px;
    object-fit: cover;
}

li {
  padding: 20px;
  height: 500px;
  justify-content: center;
  break-inside: avoid-column;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color:#66fcf1;
}

@media screen and (max-width: 1200px) {
  ul {
    columns: 2;
  }
}

@media screen and (max-width: 800px) {
  ul {
    columns: 1;
  }
}

</style>