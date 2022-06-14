<template>
  <transition name="u-dialog">
    <div
      v-show="open"
      class="u-d-flex u-position-absolute u-p2 u-mr2 u-line-height15 u-text-sz3 u-rounded2"
      :class="className"
    >
      <slot></slot>
      <Btn class="c-close u-ml-auto" @click="close"></Btn>
    </div>
  </transition>
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
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
