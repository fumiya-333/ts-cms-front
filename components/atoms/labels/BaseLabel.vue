<template>
  <label :class="labelClass"><slot></slot></label>
</template>

<script>
export default {
  props: {
    labelClass: {
      type: String,
      default: "",
    }
  }
}
</script>
