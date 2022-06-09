<template>
  <div class="m-fadein" :class="boxClass"><slot></slot></div>
</template>

<script>
export default {
  props: {
    boxClass: {
      type: String,
      default: "",
    },
  }
}
</script>
