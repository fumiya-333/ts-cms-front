<template>
  <LinkBtn name="create" href="create-pre" btn-class="c-btn-create" :class="createBtnClass">新規登録</LinkBtn>
</template>

<script>
import LinkBtn from '@/components/atoms/btns/LinkBtn'

export default {
  components: { LinkBtn },
  props: {
    createBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
