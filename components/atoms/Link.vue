<template>
  <a class="c-link" :class="hrefClass"><slot></slot></a>
</template>

<script>
export default {
  props: {
    hrefClass: {
      type: String,
      default: "",
    },
  }
}
</script>
