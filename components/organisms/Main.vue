<template>
  <main class="l-main" :class="mainClass">
    <slot></slot>
  </main>
</template>

<script>
export default {
  props: {
    mainClass: {
      type: String,
      default: '',
    },
  },
}
</script>
