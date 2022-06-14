<template>
  <h1>
    <a :href="href" :class="className"><slot></slot></a>
  </h1>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
