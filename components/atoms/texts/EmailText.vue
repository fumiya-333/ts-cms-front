<template>
  <input type="email" name="email" class="c-input" :class="emailClass" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    emailClass: {
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
