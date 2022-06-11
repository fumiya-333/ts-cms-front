<template>
  <Btn name="login" btn-class="u-bg-primary border1 u-text-white" :class="btnClass" @click="$emit('click')">ログイン</Btn>
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
