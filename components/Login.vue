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
    <Label class-name="u-d-block u-mt3">{{ $t('form.password') }}</Label>
    <TextPassword
      class-name="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      name="password"
      :value="$v.form.password.$model"
      @input="$v.form.password.$model = $event"
    ></TextPassword>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="u-mt2 u-text-danger">
      {{ $t('form.password') }}{{ $t('error.required') }}
    </div>
    <Link href="passwordResetPre" class-name="u-flex-end u-mt3">パスワードを忘れた</Link>
    <div class="u-mt10">
      <LoginBtn class-name="u-d-block u-w5 u-h1 u-m-x-center u-align-center u-text-sz4" @click="login"></LoginBtn>
      <CreateLinkBtn class-name="u-d-block u-w5 u-h1 u-mt2 u-m-x-center u-align-center u-text-sz4"></CreateLinkBtn>
    </div>
    <AlertError ref="alertError" class-name="u-nv-top70 u-w100"></AlertError>
  </FormTemplate>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate'
import Label from '@/components/atoms/Label'
import TextEmail from '@/components/atoms/TextEmail'
import TextPassword from '@/components/atoms/TextPassword'
import Link from '@/components/atoms/Link'
import LoginBtn from '@/components/molecules/btns/LoginBtn'
import CreateLinkBtn from '@/components/molecules/btns/CreateLinkBtn'
import AlertError from '@/components/molecules/dialogs/AlertError'

export default {
  components: { FormTemplate, Label, TextEmail, TextPassword, Link, LoginBtn, CreateLinkBtn, AlertError },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    async login() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const response = await this.$store.dispatch('users/login', {
          email: this.form.email,
          password: this.form.password,
        })
        if (response) {
          this.execLogin()
        } else {
          this.alertShow(this.$t('error.api'))
        }
      } else {
        this.alertShow(this.$t('error.input'))
      }
    },
    execLogin() {
      const users = this.$store.state.users.users
      if (users.success) {
        console.log(users)
      } else {
        this.alertShow(users.response.msg)
      }
    },
    alertShow(msg) {
      this.$refs.alertError.show(msg)
    },
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
}
</script>
