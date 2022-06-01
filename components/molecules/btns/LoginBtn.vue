<template>
  <Btn name="login" btn-class="c-btn-login" :class="loginBtnClass" @click="$emit('click')">ログイン</Btn>
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
