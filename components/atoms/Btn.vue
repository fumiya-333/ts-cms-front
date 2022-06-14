<template>
  <button type="button" class="u-rounded8" :class="className" @click="$emit('click')"><slot></slot></button>
</template>

<script>

export default {
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
