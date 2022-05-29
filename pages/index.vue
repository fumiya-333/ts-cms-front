<template>
  <UserTemplate>
    <Login/>
  </UserTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import UserTemplate from '@/components/templates/UserTemplate.vue'
import Login from '@/components/organisms/users/Login.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { UserTemplate, Login }
})
</script>
