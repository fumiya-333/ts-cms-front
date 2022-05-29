<template>
  <input type="text" name="name" class="c-input" :class="planeTextClass">
</template>

<script>
export default {
  props: {
    planeTextClass: {
      type: String,
      default: "",
    }
  }
}
</script>
