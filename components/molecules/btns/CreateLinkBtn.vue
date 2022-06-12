<template>
  <LinkBtn
    name="create"
    href="/create-pre"
    link-btn-class="u-bg-warning border1 u-text-white"
    :class="linkBtnClass"
    @click="$emit('click')"
    >新規登録</LinkBtn
  >
</template>

<script>
import LinkBtn from '@/components/atoms/LinkBtn'

export default {
  components: { LinkBtn },
  props: {
    linkBtnClass: {
      type: String,
      default: '',
    },
  },
}
</script>
