<template>
  <form class="c-form m-fadein" :class="formClass">
    <div class="c-form__inner" :class="formInnerClass">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    formClass: {
      type: String,
      default: "",
    },
    formInnerClass: {
      type: String,
      default: "",
    },
  }
}
</script>
