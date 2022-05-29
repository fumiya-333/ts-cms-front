<template>
  <input type="submit" class="c-btn" :class="btnClass">
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
