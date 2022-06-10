<template>
  <FormTemplate>
    <FormLabel>{{ $t('form.email') }}</FormLabel>
    <EmailText email-class="u-px2 u-py1 u-text-sz4" :value="$v.form.email.$model" placeholder="example@example.com" @input="$v.form.email.$model = $event"/>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="c-error-msg">{{ $t('form.email') }}{{ $t('error.required') }}</div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="c-error-msg">{{ $t('error.email') }}</div>
    <div class="u-mt10">
      <PasswordResetPreBtn password-reset-pre-btn-class="u-w4 u-h1 u-m-x-center u-align-center u-text-sz4" @click="passwordReset"></PasswordResetPreBtn>
    </div>
  </FormTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate.vue'
import FormLabel from '@/components/atoms/labels/Label.vue'
import EmailText from '@/components/atoms/texts/EmailText.vue'
import PasswordResetPreBtn from '@/components/molecules/btns/PasswordResetPreBtn.vue'

export default Vue.extend({
  name: "PasswordResetPrePage",
  components: { FormTemplate, FormLabel, EmailText, PasswordResetPreBtn },
  data(){
    return {
      form: {
        email: "",
      }
    }
  },
  methods: {
    passwordReset() {
      this.$v.$touch()
      // if(!this.$v.$invalid){

      // }
    }
  },
  validations: {
    form: {
      email: { required, email },
    }
  }
})
</script>
