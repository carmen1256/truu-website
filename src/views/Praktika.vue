<template>
<body>
  <div class="praktika">
    <h1>Praktika blogi</h1>
  </div>
  <ul>
    <li v-for="blogi in blogid">
      <Blogi :name="blogi.name" :alltekst="blogi.alltekst" :link="blogi.link" :pilt="load_img(blogi.name)" />
    </li>
  </ul>
</body>
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
          blogpost.alltekst = this.decode_html(post.excerpt.rendered).replace("Continued", "")
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
    },
    decode_html: function(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value.replace(/<[^>]*>/g, "");
    }
  }
}
</script>

<style scoped>
body {
  font-family: "OpenSans";
  margin: 30px;
}

.praktika h1 {
  padding-left: 30px;
  font-size: 30px;
  text-align: left;
  color: white;
  text-shadow: 3px 3px 5px black;
}

ul {
  list-style-type: none;
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
  justify-content: space-evenly;
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

@media screen and (max-width: 600px) {
  body {
    margin: 5px;
  }
}

</style>