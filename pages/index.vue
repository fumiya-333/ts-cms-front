<template>
  <LoginTemplate>
    <Login></Login>
  </LoginTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginTemplate from '@/components/templates/LoginTemplate.vue';
import Login from '@/components/organisms/Login.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { LoginTemplate, Login }
})
</script>
