<template>
  <LinkBtn name="create" href="/create-pre" btn-class="c-btn-create-pre" :class="createPreBtnClass" @click="$emit('click')">新規登録</LinkBtn>
</template>

<script>
import LinkBtn from '@/components/atoms/btns/LinkBtn'

export default {
  components: { LinkBtn },
  props: {
    createPreBtnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
