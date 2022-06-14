<template>
  <Btn name="login" class-name="u-bg-primary border1 u-text-white" :class="className" @click="$emit('click')"
    >ログイン</Btn
  >
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
}
</script>
