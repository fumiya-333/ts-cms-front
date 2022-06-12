<template>
  <Alert alert-class="u-bg-danger u-text-white">
    <slot></slot>
  </Alert>
</template>

<script>
import Alert from '@/components/atoms/Alert'

export default {
  components: { Alert },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
}
</script>
