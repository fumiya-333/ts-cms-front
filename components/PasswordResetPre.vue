<template>
  <FormTemplate>
    <Label class-name="u-d-block">{{ $t('form.email') }}</Label>
    <TextEmail
      class-name="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      name="email"
      :value="$v.form.email.$model"
      placeholder="example@example.com"
      @input="$v.form.email.$model = $event"
    ></TextEmail>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-mt2 u-text-danger">
      {{ $t('form.email') }}{{ $t('error.required') }}
    </div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="u-mt2 u-text-danger">{{ $t('error.email') }}</div>
    <div class="u-mt10">
      <BtnWarning
        name="passwordResetPre"
        class-name="u-d-block u-w5 u-h1 u-m-x-center u-align-center u-text-sz4"
        @click="passwordReset"
        >パスワード変更</BtnWarning
      >
    </div>
  </FormTemplate>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate'
import Label from '@/components/atoms/Label'
import TextEmail from '@/components/atoms/TextEmail'
import BtnWarning from '@/components/atoms/BtnWarning'

export default {
  components: { FormTemplate, Label, TextEmail, BtnWarning },
  data() {
    return {
      form: {
        email: '',
      },
    }
  },
  methods: {
    passwordReset() {
      this.$v.$touch()
      // if(!this.$v.$invalid){

      // }
    },
  },
  validations: {
    form: {
      email: { required, email },
    },
  },
}
</script>
