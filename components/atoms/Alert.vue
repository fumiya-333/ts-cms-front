<template>
  <div v-if="open" class="c-alert" :class="alertClass">
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    alertClass: {
      type: String,
      default: "",
    },
  }
}
</script>
