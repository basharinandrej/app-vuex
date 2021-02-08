<template>
  <div class="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>

<style>
.post{
  width: 400px;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 0 auto 32px auto;
  padding: 4px;
}
</style>