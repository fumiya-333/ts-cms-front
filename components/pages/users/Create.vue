<template>
  <MainTemplate>
    <Label class-name="u-d-block u-mt12">{{ $t('form.name') }}</Label>
    <Label class-name="u-d-block u-ml16 u-mt8">{{ form.name }}</Label>
    <Label class-name="u-d-block u-mt12">{{ $t('form.email') }}</Label>
    <Label class-name="u-d-block u-ml16 u-mt8">{{ form.email }}</Label>
    <Label class-name="u-d-block u-mt12">{{ $t('form.password') }}</Label>
    <TextPassword
      class-name="u-d-block u-px8 u-py4 u-mt8 u-text-sz4"
      name="password"
      :value="$v.form.password.$model"
      @input="$v.form.password.$model = $event"
    ></TextPassword>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="u-mt8 u-text-danger">
      {{ $t('form.password') }}{{ $t('error.required') }}
    </div>
    <Label class-name="u-d-block u-mt12">{{ $t('form.passwordConfirm') }}</Label>
    <TextPassword
      class-name="u-d-block u-px8 u-py4 u-mt8 u-text-sz4"
      name="passwordConfirm"
      :value="$v.form.passwordConfirm.$model"
      @input="$v.form.passwordConfirm.$model = $event"
    ></TextPassword>
    <div v-if="$v.form.passwordConfirm.$error && !$v.form.passwordConfirm.required" class="u-mt8 u-text-danger">
      {{ $t('form.passwordConfirm') }}{{ $t('error.required') }}
    </div>
    <div v-if="$v.form.passwordConfirm.$error && !$v.form.passwordConfirm.sameAsPassword" class="u-mt8 u-text-danger">
      {{ $t('form.password') }}と{{ $t('form.passwordConfirm') }}{{ $t('error.sameAs') }}
    </div>
    <div class="u-mt20">
      <BtnWarning
        name="createPre"
        class-name="u-d-block u-w100 u-h20 u-mx-auto u-align-center u-text-sz4"
        @click="createPre"
        >新規登録</BtnWarning
      >
    </div>
    <portal to="target">
      <AlertInfo
        ref="alertInfo"
        :class-name="`u-top70 ${$device.isMobile ? 'u-ml16 u-left' : 'u-right-percent5'}`"
      ></AlertInfo>
      <AlertDanger
        ref="alertDanger"
        :class-name="`u-top70 ${$device.isMobile ? 'u-ml16 u-left' : 'u-right-percent5'}`"
      ></AlertDanger>
    </portal>
  </MainTemplate>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'
import MainTemplate from '@/components/templates/MainTemplate'
import Label from '@/components/atoms/Label'
import TextPassword from '@/components/atoms/TextPassword'
import BtnWarning from '@/components/atoms/BtnWarning'
import AlertInfo from '@/components/molecules/dialogs/AlertInfo'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'

export default {
  components: { MainTemplate, Label, TextPassword, BtnWarning, AlertInfo, AlertDanger },
  data() {
    return {
      form: {
        email: this.$store.state.users.users.response.email,
        name: this.$store.state.users.users.response.name,
        password: '',
        passwordConfirm: '',
      },
    }
  },
  methods: {
    async createPre() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await this.$store.dispatch('users/create', {
          email: this.form.email,
          password: this.form.password,
        })
        const users = this.$store.state.users.users
        if (users && users.success && typeof users.response !== 'undefined') {
          if (users.success) {
            this.$router.push({ path: '/users/login' })
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
      password: { required },
      passwordConfirm: { required, sameAsPassword: sameAs('password') },
    },
  },
}
</script>
