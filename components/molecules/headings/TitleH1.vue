<template>
  <H1><a href="/">{{ $t('title') }}</a></H1>
</template>

<script>
import H1 from '@/components/atoms/headings/H1'

export default {
  components: { H1 },
  props: {
    href: {
      type: String,
      default: "",
    },
    btnClass: {
      type: String,
      default: "",
    },
  }
}
</script>
