<template>
  <User>
    <FormLabel>{{ $t('form.email') }}</FormLabel>
    <EmailText :value="$v.form.email.$model" placeholder="example@example.com" @input="$v.form.email.$model = $event"/>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-error-msg">{{ $t('form.email') }}{{ $t('error.required') }}</div>
    <div class="p-users__inner__form__inner__btn-area">
      <PasswordResetPreBtn password-reset-pre-btn-class="p-users__inner__form__inner__btn-area-btn-create-pre" @click="passwordReset"></PasswordResetPreBtn>
    </div>
  </User>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import User from '@/components/organisms/users/User'
import FormLabel from '@/components/atoms/labels/BaseLabel'
import EmailText from '@/components/atoms/texts/EmailText'
import PasswordResetPreBtn from '@/components/molecules/btns/PasswordResetPreBtn'

export default {
  components: { User, FormLabel, EmailText, PasswordResetPreBtn },
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
}
</script>
