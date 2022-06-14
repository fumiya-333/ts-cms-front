<template>
  <LinkBtn
    name="create"
    href="/createPre"
    class-name="u-bg-warning border1 u-text-white"
    :class="className"
    @click="$emit('click')"
    >新規登録</LinkBtn
  >
</template>

<script>
import LinkBtn from '@/components/atoms/LinkBtn'

export default {
  components: { LinkBtn },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
