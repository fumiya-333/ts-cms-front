<template>
  <form class="u-fadein" :class="formClass">
    <div :class="formInnerClass">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    formClass: {
      type: String,
      default: '',
    },
    formInnerClass: {
      type: String,
      default: '',
    },
  },
}
</script>
