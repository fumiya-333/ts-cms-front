<template>
  <input :type="type" :name="name" class="c-input" :class="textClass" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
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
