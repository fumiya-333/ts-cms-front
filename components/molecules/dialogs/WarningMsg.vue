<template>
  <Alert :open="open" alert-class="warningMsgClass">
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
    warningMsgClass: {
      type: String,
      default: "",
    },
    msg: {
      type: String,
      default: "",
    }
  }
}
</script>
