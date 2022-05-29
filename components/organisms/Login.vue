<template>
  <div class="p-login">
    <div class="p-login__inner">
      <Form></Form>
    </div>
  </div>
</template>

<script>
import Form from '@/components/atoms/forms/Form.vue';

export default {
    name: "NuxtLogin",
    components: { Form }
}
</script>
