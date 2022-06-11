<template>
  <Btn
    name="create-pre"
    btn-class="u-bg-warning border1 u-text-white"
    :class="createPreBtnClass"
    @click="$emit('click')"
    >新規登録</Btn
  >
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
  props: {
    createPreBtnClass: {
      type: String,
      default: '',
    },
  },
}
</script>
