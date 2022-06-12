<template>
  <Btn
    name="password-reset-pre"
    btn-class="u-bg-warning border1 u-text-white"
    :class="btnClass"
    @click="$emit('click')"
    >パスワード変更</Btn
  >
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
  props: {
    btnClass: {
      type: String,
      default: '',
    },
  },
}
</script>
