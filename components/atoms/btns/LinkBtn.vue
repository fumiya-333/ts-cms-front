<template>
  <a class="c-btn" :class="btnClass" @click="$emit('click')"><span><slot></slot></span></a>
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
