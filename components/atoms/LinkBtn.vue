<template>
  <a class="c-link-btn" :class="className" @click="$emit('click')"
    ><span><slot></slot></span
  ></a>
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
