<template>
  <input type="email" name="email" class="c-input" :class="emailTextClass" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    emailTextClass: {
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
