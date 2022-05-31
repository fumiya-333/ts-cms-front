<template>
  <Btn name="password-reset-pre" btn-class="c-btn-password-reset-pre" :class="passwordResetPreBtnClass" @click="$emit('click')">パスワード変更</Btn>
</template>

<script>
import Btn from '@/components/atoms/btns/Btn'

export default {
  components: { Btn },
  props: {
    passwordResetPreBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
