<template>
  <LinkBtn class-name="u-bg-warning border1 u-text-white" :href="hrefName" :class="className" @click="$emit('click')"
    ><slot></slot
  ></LinkBtn>
</template>

<script>
import LinkBtn from '@/components/atoms/LinkBtn'

export default {
  components: { LinkBtn },
  props: {
    hrefName: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
