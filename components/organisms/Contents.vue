<template>
  <section class="l-contents" :class="contentsClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    contentsClass: {
      type: String,
      default: "",
    },
  }
}
</script>
