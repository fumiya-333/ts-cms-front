<template>
  <a class="c-link" :class="className"><slot></slot></a>
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
