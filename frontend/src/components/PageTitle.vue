<!-- PageTitle.vue -->
<template>
  <div></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.title = this.title;
  }
}
</script>