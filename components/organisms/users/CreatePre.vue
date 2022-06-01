<template>
  <User>
    <FormLabel>{{ $t('form.name') }}</FormLabel>
    <PlaneText :value="$v.form.name.$model" placeholder="浦島 太郎" @input="$v.form.name.$model = $event"></PlaneText>
    <div v-if="$v.form.name.$error && !$v.form.name.required" class="u-error-msg">{{ $t('form.name') }}{{ $t('error.required') }}</div>
    <FormLabel>{{ $t('form.email') }}</FormLabel>
    <EmailText :value="$v.form.email.$model" placeholder="example@example.com" @input="$v.form.email.$model = $event"/>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-error-msg">{{ $t('form.email') }}{{ $t('error.required') }}</div>
    <FormLabel>{{ $t('form.password') }}</FormLabel>
    <PasswordText :value="$v.form.password.$model" @input="$v.form.password.$model = $event"/>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="u-error-msg">{{ $t('form.password') }}{{ $t('error.required') }}</div>
    <div class="p-users__inner__form__inner__btn-area">
      <CreatePreBtn create-pre-btn-class="p-users__inner__form__inner__btn-area-btn-create-pre" @click="createPre"></CreatePreBtn>
    </div>
  </User>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import User from '@/components/organisms/users/User'
import FormLabel from '@/components/atoms/labels/BaseLabel'
import EmailText from '@/components/atoms/texts/EmailText'
import CreatePreBtn from '@/components/molecules/btns/CreatePreBtn'
import PasswordText from '@/components/atoms/texts/PasswordText'
import PlaneText from '@/components/atoms/texts/PlaneText'

export default {
  components: { User, FormLabel, EmailText, CreatePreBtn, PasswordText, PlaneText },
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
}
</script>
