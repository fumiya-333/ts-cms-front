<template>
  <UserTemplate>
    <CreatePre/>
  </UserTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import UserTemplate from '@/components/templates/UserTemplate.vue'
import CreatePre from '@/components/organisms/users/CreatePre.vue'

export default Vue.extend({
    name: "CreatePrePage",
    components: { UserTemplate, CreatePre }
})
</script>
