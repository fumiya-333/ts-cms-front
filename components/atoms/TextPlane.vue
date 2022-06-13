<template>
  <input
    :type="type"
    :name="name"
    class="u-w100 u-border1 u-border-secondary u-rounded1 u-outline1 u-outline-secondary"
    :class="textClass"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    textClass: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
