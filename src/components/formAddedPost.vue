<template>
  <form class="added-form" @submit.prevent="submitHandler">
    <input type="text" placeholder="title" v-model="title"> <br>
    <input type="text" placeholder="Description" v-model="desc"> <br>
    <button type="submit">Added</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      desc: ''
    }
  },
  methods: {
    submitHandler() {
      this.$emit('add-post', {
        title: this.title,
        body: this.desc
      })
      this.title = this.desc = ''
    }
  }
}
</script>