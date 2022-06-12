<template>
  <div class="u-position-absolute u-p2 u-mr2 u-line-height15 u-text-sz3 u-rounded2" :class="alertClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    alertClass: {
      type: String,
      default: '',
    },
  },
}
</script>
