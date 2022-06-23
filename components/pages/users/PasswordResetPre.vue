<template>
  <MainTemplate>
    <Label class-name="u-d-block">{{ $t('form.email') }}</Label>
    <TextEmail
      class-name="u-d-block u-px8 u-py4 u-mt8 u-text-sz4"
      name="email"
      :value="$v.form.email.$model"
      placeholder="example@example.com"
      @input="$v.form.email.$model = $event"
    ></TextEmail>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-mt8 u-text-danger">
      {{ $t('form.email') }}{{ $t('error.required') }}
    </div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="u-mt8 u-text-danger">{{ $t('error.email') }}</div>
    <div class="u-mt20">
      <BtnWarning
        name="passwordResetPre"
        class-name="u-d-block u-w100 u-h20 u-mx-auto u-align-center u-text-sz4"
        @click="passwordResetPre"
        >パスワード変更</BtnWarning
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
import { required, email } from 'vuelidate/lib/validators'
import MainTemplate from '@/components/templates/MainTemplate'
import Label from '@/components/atoms/Label'
import TextEmail from '@/components/atoms/TextEmail'
import BtnWarning from '@/components/atoms/BtnWarning'
import AlertInfo from '@/components/molecules/dialogs/AlertInfo'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'

export default {
  components: { MainTemplate, Label, TextEmail, BtnWarning, AlertInfo, AlertDanger },
  data() {
    return {
      form: {
        email: '',
      },
    }
  },
  methods: {
    async passwordResetPre() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await this.$store.dispatch('users/passwordResetPre', {
          email: this.form.email,
        })
        const users = this.$store.state.users.users
        if (users && users.success && typeof users.response !== 'undefined') {
          if (users.success) {
            this.alertInfoShow(users.response.msg)
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
    },
  },
}
</script>
