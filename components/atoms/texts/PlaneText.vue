<template>
  <input type="text" name="name" class="c-input" :class="planeClass" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    planeClass: {
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
