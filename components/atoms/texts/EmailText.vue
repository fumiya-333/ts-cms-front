<template>
  <input type="email" name="email" class="c-input" :class="emailTextClass">
</template>

<script>
export default {
  props: {
    emailTextClass: {
      type: String,
      default: "",
    }
  }
}
</script>
