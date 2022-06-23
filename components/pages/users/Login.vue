<template>
  <MainTemplate>
    <Form ref="form" action-name="/" method-name="post" class-name-inner="u-position-relative">
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
        <BtnPrimary name="login" class-name="u-d-block u-w5 u-h1 u-mx-auto u-align-center u-text-sz4" @click="login"
          >ログイン</BtnPrimary
        >
        <LinkBtnWarning href-name="createPre" class-name="u-d-block u-w5 u-h1 u-mt2 u-mx-auto u-align-center u-text-sz4"
          >新規登録</LinkBtnWarning
        >
      </div>
      <portal to="target">
        <AlertInfo
          ref="alertInfo"
          :class-name="`u-top70 ${$device.isMobile ? 'u-ml2 u-left' : 'u-right-percent5'}`"
        ></AlertInfo>
        <AlertDanger
          ref="alertDanger"
          :class-name="`u-top70 ${$device.isMobile ? 'u-ml2 u-left' : 'u-right-percent5'}`"
        ></AlertDanger>
      </portal>
    </Form>
  </MainTemplate>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
import MainTemplate from '@/components/templates/MainTemplate'
import Form from '@/components/molecules/forms/Form'
import Label from '@/components/atoms/Label'
import TextEmail from '@/components/atoms/TextEmail'
import TextPassword from '@/components/atoms/TextPassword'
import Link from '@/components/atoms/Link'
import BtnPrimary from '@/components/atoms/BtnPrimary'
import LinkBtnWarning from '@/components/atoms/LinkBtnWarning'
import AlertInfo from '@/components/molecules/dialogs/AlertInfo'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'

export default {
  components: {
    MainTemplate,
    Form,
    Label,
    TextEmail,
    TextPassword,
    Link,
    BtnPrimary,
    LinkBtnWarning,
    AlertInfo,
    AlertDanger,
  },
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
  mounted() {
    this.$nextTick(() => {
      const users = this.$store.state.users.users
      if (users && users.success && typeof users.response !== 'undefined') {
        if (users.success) {
          this.alertInfoShow(users.response.msg)
        } else {
          this.alertDangerShow(users.response.msg)
        }
      }
    })
  },
  methods: {
    async login() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await this.$store.dispatch('users/login', {
          email: this.form.email,
          password: this.form.password,
        })
        const users = this.$store.state.users.users
        if (users && users.success && typeof users.response !== 'undefined') {
          if (users.success) {
            const now = this.$getAddHoursNow(1)
            this.$cookies.set('token', users.response.token, { path: '/', maxAge: now })
            this.$router.push('/')
          } else {
            this.alertDangerShow(users.response.msg)
          }
        } else {
          this.alertDangerShow(this.$t('error.api'))
        }
      } else {
        this.alertDangerShow(this.$t('error.input'))
      }
    },
    alertInfoShow(msg) {
      this.$refs.alertInfo.show(msg)
    },
    alertDangerShow(msg) {
      this.$refs.alertDanger.show(msg)
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
