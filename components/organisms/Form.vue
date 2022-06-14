<template>
  <form class="u-fadein" :class="className">
    <div :class="classNameInner">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
    classNameInner: {
      type: String,
      default: '',
    },
  },
}
</script>
