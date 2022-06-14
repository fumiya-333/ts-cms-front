<template>
  <Btn name="createPre" class-name="u-bg-warning border1 u-text-white" :class="className" @click="$emit('click')"
    >新規登録</Btn
  >
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
}
</script>
