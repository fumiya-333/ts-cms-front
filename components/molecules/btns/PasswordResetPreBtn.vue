<template>
  <Btn
    name="password-reset-pre"
    btn-class="u-bg-warning border1 u-text-white"
    :class="passwordResetPreBtnClass"
    @click="$emit('click')"
    >パスワード変更</Btn
  >
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
  props: {
    passwordResetPreBtnClass: {
      type: String,
      default: '',
    },
  },
}
</script>
