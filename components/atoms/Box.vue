<template>
  <div :class="boxClass"><slot></slot></div>
</template>

<script>
export default {
  props: {
    boxClass: {
      type: String,
      default: "",
    },
  }
}
</script>
