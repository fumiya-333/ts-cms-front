<template>
  <Btn name="create-pre" btn-class="c-btn-create-pre" :class="createPreBtnClass" @click="$emit('click')">新規登録</Btn>
</template>

<script>
import Btn from '@/components/atoms/btns/Btn'

export default {
  components: { Btn },
  props: {
    createPreBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
