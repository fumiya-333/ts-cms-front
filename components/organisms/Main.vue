<template>
  <main class="l-main" :class="className">
    <slot></slot>
  </main>
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
