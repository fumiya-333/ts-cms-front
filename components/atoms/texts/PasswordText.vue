<template>
  <input type="password" name="password" class="c-input" :class="passwordClass" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    passwordClass: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    }
  }
}
</script>
