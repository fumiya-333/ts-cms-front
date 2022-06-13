<template>
  <AlertDanger alert-class="u-bg-danger u-text-white" :class="alertClass">
    {{ msg }}
  </AlertDanger>
</template>

<script>
import AlertDanger from '@/components/atoms/AlertDanger'

export default {
  components: { AlertDanger },
  props: {
    alertClass: {
      type: String,
      default: '',
    },
    msg: {
      type: String,
      default: '',
    },
  },
}
</script>
