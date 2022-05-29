<template>
  <BaseBtn name="login" value="ログイン" btn-class="c-btn-login" :class="loginBtnClass"></BaseBtn>
</template>

<script>
import BaseBtn from '@/components/atoms/btns/BaseBtn.vue'

export default {
  components: { BaseBtn },
  props: {
    loginBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
