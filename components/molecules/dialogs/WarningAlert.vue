<template>
  <Alert :open="open" alert-class="u-bg-warning u-text-white">
    {{ msg }}
  </Alert>
</template>

<script>
import Alert from '@/components/atoms/Alert'

export default {
  components: { Alert },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    msg: {
      type: String,
      default: "",
    }
  }
}
</script>
