<template>
  <input type="password" class="c-input" :name="name" :class="textClass" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    textClass: {
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
