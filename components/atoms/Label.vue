<template>
  <label :class="className"><slot></slot></label>
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
