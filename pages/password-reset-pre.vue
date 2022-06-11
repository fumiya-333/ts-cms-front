<template>
  <FormTemplate>
    <Label label-class="u-d-block">{{ $t('form.email') }}</Label>
    <TextEmail
      text-class="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      name="email"
      :value="$v.form.email.$model"
      placeholder="example@example.com"
      @input="$v.form.email.$model = $event"
    />
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-mt2 u-text-danger">
      {{ $t('form.email') }}{{ $t('error.required') }}
    </div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="u-mt2 u-text-danger">{{ $t('error.email') }}</div>
    <div class="u-mt10">
      <PasswordResetPreBtn
        password-reset-pre-btn-class="u-d-block u-w5 u-h1 u-m-x-center u-align-center u-text-sz4"
        @click="passwordReset"
      ></PasswordResetPreBtn>
    </div>
  </FormTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate.vue'
import Label from '@/components/atoms/Label.vue'
import TextEmail from '@/components/atoms/TextEmail.vue'
import PasswordResetPreBtn from '@/components/molecules/btns/PasswordResetPreBtn.vue'

export default Vue.extend({
  name: 'PasswordResetPrePage',
  components: { FormTemplate, Label, TextEmail, PasswordResetPreBtn },
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
})
</script>
