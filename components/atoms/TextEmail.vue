<template>
  <input
    type="email"
    class="u-w100 u-border1 u-border-secondary u-rounded1 u-outline1 u-outline-secondary"
    :name="name"
    :class="className"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    className: {
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
