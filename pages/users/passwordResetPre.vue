<template>
  <PasswordResetPre></PasswordResetPre>
</template>

<script lang="ts">
import Vue from 'vue'
import PasswordResetPre from '@/components/pages/users/PasswordResetPre.vue'

export default Vue.extend({
  name: 'PasswordResetPrePage',
  components: { PasswordResetPre },
})
</script>
