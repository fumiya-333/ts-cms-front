<template>
  <FormTemplate>
    <FormLabel>{{ $t('form.name') }}</FormLabel>
    <PlaneText plane-class="u-px2 u-py1 u-text-sz4"  :value="$v.form.name.$model" placeholder="浦島 太郎" @input="$v.form.name.$model = $event"></PlaneText>
    <div v-if="$v.form.name.$error && !$v.form.name.required" class="c-error-msg">{{ $t('form.name') }}{{ $t('error.required') }}</div>
    <FormLabel>{{ $t('form.email') }}</FormLabel>
    <EmailText email-class="u-px2 u-py1 u-text-sz4" :value="$v.form.email.$model" placeholder="example@example.com" @input="$v.form.email.$model = $event"/>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="c-error-msg">{{ $t('form.email') }}{{ $t('error.required') }}</div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="c-error-msg">{{ $t('error.email') }}</div>
    <FormLabel>{{ $t('form.password') }}</FormLabel>
    <PasswordText password-class="u-px2 u-py1 u-text-sz4"  :value="$v.form.password.$model" @input="$v.form.password.$model = $event"/>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="c-error-msg">{{ $t('form.password') }}{{ $t('error.required') }}</div>
    <div class="u-mt10">
      <CreatePreBtn create-pre-btn-class="u-w5 u-h1 u-m-x-center u-align-center u-text-sz4" @click="createPre"></CreatePreBtn>
    </div>
  </FormTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate.vue'
import FormLabel from '@/components/atoms/labels/Label.vue'
import EmailText from '@/components/atoms/texts/EmailText.vue'
import CreatePreBtn from '@/components/molecules/btns/CreatePreBtn.vue'
import PasswordText from '@/components/atoms/texts/PasswordText.vue'
import PlaneText from '@/components/atoms/texts/PlaneText.vue'

export default Vue.extend({
  name: "CreatePrePage",
  components: { FormTemplate, FormLabel, EmailText, CreatePreBtn, PasswordText, PlaneText },
  data(){
    return {
      form: {
        name: "",
        email: "",
        password: "",
      }
    }
  },
  methods: {
    createPre() {
      this.$v.$touch()
      // if(!this.$v.$invalid){

      // }
    }
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required },
    }
  }
})
</script>
