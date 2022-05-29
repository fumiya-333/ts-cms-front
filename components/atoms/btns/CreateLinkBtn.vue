<template>
  <BaseLinkBtn name="create" href="create-pre" btn-class="c-btn-create" :class="createBtnClass">新規登録</BaseLinkBtn>
</template>

<script>
import BaseLinkBtn from '@/components/atoms/btns/BaseLinkBtn.vue'

export default {
  components: { BaseLinkBtn },
  props: {
    createBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
