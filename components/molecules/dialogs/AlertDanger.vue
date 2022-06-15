<template>
  <Alert ref="alert" class-name="u-bg-danger u-text-white" :class="className">
    <span class="u-d-inline-block u-w100">{{ msg }}</span>
  </Alert>
</template>

<script>
import Alert from '@/components/molecules/dialogs/Alert'

export default {
  components: { Alert },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      msg: '',
    }
  },
  methods: {
    show(msg) {
      this.msg = msg
      this.$refs.alert.show()
    },
  },
}
</script>
