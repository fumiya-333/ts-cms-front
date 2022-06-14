<template>
  <AlertDanger ref="alertDanger" class-name="u-bg-danger u-text-white" :class="className">
    {{ msg }}
  </AlertDanger>
</template>

<script>
import AlertDanger from '@/components/atoms/AlertDanger'

export default {
  components: { AlertDanger },
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
      this.$refs.alertDanger.show()
    },
  },
}
</script>
