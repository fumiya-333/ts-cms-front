<template>
  <h1><a href="/">{{ title }} </a></h1>
</template>

<script>
export default {
  data() {
    return {
      title: this.$getTitle()
    }
  }
}
</script>
