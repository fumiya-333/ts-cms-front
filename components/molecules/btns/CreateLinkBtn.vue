<template>
  <LinkBtn name="create" href="/create-pre" link-btn-class="u-bg-warning border1 u-text-white" :class="createPreBtnClass" @click="$emit('click')">新規登録</LinkBtn>
</template>

<script>
import LinkBtn from '@/components/atoms/LinkBtn'

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
