<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AddPosts />
    <ViewCntPosts
      v-on:cnt-post="cntPostsView"
    />
    <strong class="cnt-posts">{{ cntPosts }} - posts</strong>
    <Post
      v-for="(post, idx) in allPosts"
      v-bind:post="post"
      :key="idx"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Post from './components/post.vue'
import ViewCntPosts from "@/components/viewCntPosts";
import AddPosts from "@/components/addPosts";

export default {
  name: 'App',
  data() {
    return {
      posts: []
    }
  },
  components: {
    ViewCntPosts,
    AddPosts,
    Post
  },
  computed: mapGetters(['allPosts', 'cntPosts']),
  methods: {
    cntPostsView(cnt) {
      return this.$store.dispatch('fetchPosts', cnt || 2)
    }
  },
  async mounted() {
    this.cntPostsView()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cnt-posts {
  text-align: center;
  display: block;
  font-size: 24px;
  margin-bottom: 32px;
}
</style>
