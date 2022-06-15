<template>
  <transition name="u-dialog">
    <Box
      v-show="open"
      class-name="u-d-flex u-position-absolute u-p2 u-line-height15 u-text-sz3 u-rounded2"
      :class="className"
    >
      <slot></slot>
      <Btn class="c-close u-ml-auto u-ml4 u-my-auto" @click="close"></Btn>
    </Box>
  </transition>
</template>

<script>
import Btn from '@/components/atoms/Btn'
import Box from '@/components/atoms/Box'

export default {
  components: { Btn, Box },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    show() {
      this.open = true
    },
    close() {
      this.open = false
      this.$emit('close')
    },
  },
}
</script>
