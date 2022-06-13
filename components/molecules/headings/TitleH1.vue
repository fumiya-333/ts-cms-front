<template>
  <H1 href="/">{{ $t('title') }}</H1>
</template>

<script>
import H1 from '@/components/atoms/H1'

export default {
  components: { H1 },
  props: {
    href: {
      type: String,
      default: '',
    },
    btnClass: {
      type: String,
      default: '',
    },
  },
}
</script>
