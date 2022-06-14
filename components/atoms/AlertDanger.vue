<template>
  <Alert ref="alert" class-name="u-bg-danger u-text-white" :class="className">
    <slot></slot>
  </Alert>
</template>

<script>
import Alert from '@/components/atoms/Alert'

export default {
  components: { Alert },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  methods: {
    show() {
      this.$refs.alert.show()
    },
  },
}
</script>
