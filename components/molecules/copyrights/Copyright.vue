<template>
  <Box class-name="u-text-sz3 u-text-w7"> © {{ year }} {{ $t('title') }}. </Box>
</template>

<script>
import Box from '@/components/atoms/Box'

export default {
  components: { Box },
  data() {
    return {
      year: this.$getYear(),
    }
  },
}
</script>
