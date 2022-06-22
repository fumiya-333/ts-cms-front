<template>
  <form ref="form" class="u-fadein" :action="actionName" :class="className">
    <div :class="classNameInner">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    actionName: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    classNameInner: {
      type: String,
      default: '',
    },
  },
  methods: {
    submit() {
      this.$refs.form.submit()
    },
  },
}
</script>
