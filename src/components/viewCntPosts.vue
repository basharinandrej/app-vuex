<template>
  <form class="form-cnt" @submit.prevent="submitHandler">
    <input type="number" v-model="cnt">
    <button type="submit">sent</button>
  </form>
</template>

<script>
export default {
  name: 'viewCntPosts',
  data() {
    return {
      cnt: ''
    }
  },
  methods: {
    submitHandler() {
      this.$emit('cnt-post', this.cnt)
      this.cnt = ''
    }
  }
}
</script>

<style>
.form-cnt {
  margin-bottom: 24px;
}
</style>