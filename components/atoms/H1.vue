<template>
  <h1>
    <a :href="href" :class="btnClass"><slot></slot></a>
  </h1>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    btnClass: {
      type: String,
      default: '',
    },
  },
}
</script>
