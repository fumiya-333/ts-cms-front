<template>
  <div class="c-copyright m-fadein">
    © {{ year }} {{ title }}.
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: this.$getYear(),
      title: this.$getTitle()
    }
  }
}
</script>
