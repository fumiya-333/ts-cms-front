<template>
  <a class="c-link-btn" :class="linkBtnClass" @click="$emit('click')"><span><slot></slot></span></a>
</template>

<script>
export default {
  props: {
    linkBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
