<template>
  <button type="button" class="c-btn" :class="btnClass" @click="$emit('click')"><slot></slot></button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
