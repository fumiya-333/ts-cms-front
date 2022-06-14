<template>
  <Btn name="passwordResetPre" class-name="u-bg-warning border1 u-text-white" :class="className" @click="$emit('click')"
    >パスワード変更</Btn
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
