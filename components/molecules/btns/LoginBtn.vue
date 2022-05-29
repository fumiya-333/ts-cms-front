<template>
  <Btn name="login" value="ログイン" btn-class="c-btn-login" :class="loginBtnClass"></Btn>
</template>

<script>
import Btn from '@/components/atoms/btns/Btn'

export default {
  components: { Btn },
  props: {
    loginBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
