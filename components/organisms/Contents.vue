<template>
  <section class="l-contents" :class="className">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
