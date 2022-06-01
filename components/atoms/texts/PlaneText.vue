<template>
  <input type="text" name="name" class="c-input" :class="planeTextClass" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    planeTextClass: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  }
}
</script>
