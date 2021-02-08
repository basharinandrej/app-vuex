<template>
  <div>
    <Form
      v-on:add-post="submitHandler"
    />
    <p v-if="!isFormValid">
      {{ this.error }}
    </p>
  </div>
</template>


<script>
import Form from './formAddedPost.vue'
export default {
  data() {
    return {
      isFormValid: true,
      error: ` Форма не корректно заполнена`
    }
  },
  components: {
    Form
  },
  methods: {
    submitHandler(props) {
      if(props.title.trim() && props.body.trim()) {
        this.isFormValid = true
        this.$store.commit('addedPost', {
          id: Math.floor(Math.random() * 100),
          title: props.title,
          body: props.body
        })
      } else {
        this.isFormValid = false
      }
    }
  }
}
</script>

<style>
.added-form{
  margin-bottom: 32px;
  display: block;
}

</style>