<template>
  <button type="button" class="u-rounded8" :class="btnClass" @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: '',
    },
  },
}
</script>
