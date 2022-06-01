<template>
  <div class="c-copyright m-fadein">
    © {{ year }} {{ $t('title') }}.
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: this.$getYear()
    }
  }
}
</script>
