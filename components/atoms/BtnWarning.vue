<template>
  <Btn class-name="u-bg-warning border1 u-text-white" :name="name" :class="className" @click="$emit('click')"
    ><slot></slot
  ></Btn>
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
  props: {
    name: {
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
