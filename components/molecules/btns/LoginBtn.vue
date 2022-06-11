<template>
  <Btn name="login" btn-class="c-btn-login" :class="btnClass" @click="$emit('click')">ログイン</Btn>
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
  props: {
    btnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
