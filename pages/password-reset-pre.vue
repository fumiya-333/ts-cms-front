<template>
  <UserTemplate>
    <PasswordResetPre/>
  </UserTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import UserTemplate from '@/components/templates/UserTemplate.vue'
import PasswordResetPre from '@/components/organisms/users/PasswordResetPre.vue'

export default Vue.extend({
    name: "PasswordResetPrePage",
    components: { UserTemplate, PasswordResetPre }
})
</script>
