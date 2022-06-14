<template>
  <div :class="className"><slot></slot></div>
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
