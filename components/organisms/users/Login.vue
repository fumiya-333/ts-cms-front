<template>
  <User>
    <FormLabel>{{ $t('form.email') }}</FormLabel>
    <EmailText :value="$v.form.email.$model" placeholder="example@example.com" @input="$v.form.email.$model = $event"/>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-error-msg">{{ $t('form.email') }}{{ $t('error.required') }}</div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="u-error-msg">{{ $t('error.email') }}</div>
    <FormLabel>{{ $t('form.password') }}</FormLabel>
    <PasswordText :value="$v.form.password.$model" @input="$v.form.password.$model = $event"/>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="u-error-msg">{{ $t('form.password') }}{{ $t('error.required') }}</div>
    <Link href="password-reset-pre" href-class="u-flex-end p-users__inner__form__inner__password-reset-link">パスワードを忘れた</Link>
    <div class="p-users__inner__form__inner__btn-area">
      <LoginBtn login-btn-class="p-users__inner__form__inner__btn-area-btn-login" @click="login"></LoginBtn>
      <CreateLinkBtn create-pre-btn-class="p-users__inner__form__inner__btn-area-btn-create-pre"></CreateLinkBtn>
    </div>
  </User>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import User from '@/components/organisms/users/User'
import FormLabel from '@/components/atoms/labels/BaseLabel'
import EmailText from '@/components/atoms/texts/EmailText'
import PasswordText from '@/components/atoms/texts/PasswordText'
import Link from '@/components/atoms/links/BaseLink'
import LoginBtn from '@/components/molecules/btns/LoginBtn'
import CreateLinkBtn from '@/components/molecules/btns/CreateLinkBtn'

export default {
  components: { User, FormLabel, EmailText, PasswordText, Link, LoginBtn, CreateLinkBtn },
  data(){
    return {
      form: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    login() {
      this.$v.$touch()
      // if(!this.$v.$invalid){

      // }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    }
  }
}
</script>
