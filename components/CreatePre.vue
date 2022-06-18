<template>
  <FormTemplate>
    <Label class-name="u-d-block">{{ $t('form.name') }}</Label>
    <TextPlane
      class-name="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      :value="$v.form.name.$model"
      placeholder="浦島 太郎"
      @input="$v.form.name.$model = $event"
    ></TextPlane>
    <div v-if="$v.form.name.$error && !$v.form.name.required" class="u-mt2 u-text-danger">
      {{ $t('form.name') }}{{ $t('error.required') }}
    </div>
    <Label class-name="u-d-block u-mt3">{{ $t('form.email') }}</Label>
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
    <Label class-name="u-d-block u-mt3">{{ $t('form.emailConfirm') }}</Label>
    <TextEmail
      class-name="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      name="email"
      :value="$v.form.emailConfirm.$model"
      @input="$v.form.emailConfirm.$model = $event"
    ></TextEmail>
    <div v-if="$v.form.emailConfirm.$error && !$v.form.emailConfirm.required" class="u-mt2 u-text-danger">
      {{ $t('form.emailConfirm') }}{{ $t('error.required') }}
    </div>
    <div v-if="$v.form.emailConfirm.$error && !$v.form.emailConfirm.sameAsEmail" class="u-mt2 u-text-danger">
      {{ $t('form.email') }}と{{ $t('form.emailConfirm') }}{{ $t('error.sameAs') }}
    </div>
    <div class="u-mt10">
      <BtnWarning
        name="createPre"
        class-name="u-d-block u-w5 u-h1 u-mx-auto u-align-center u-text-sz4"
        @click="createPre"
        >新規登録</BtnWarning
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
  </FormTemplate>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate'
import Label from '@/components/atoms/Label'
import TextPlane from '@/components/atoms/TextPlane'
import TextEmail from '@/components/atoms/TextEmail'
import BtnWarning from '@/components/atoms/BtnWarning'
import AlertInfo from '@/components/molecules/dialogs/AlertInfo'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'

export default {
  components: { FormTemplate, Label, TextPlane, TextEmail, BtnWarning, AlertInfo, AlertDanger },
  data() {
    return {
      form: {
        name: '',
        email: '',
        emailConfirm: '',
      },
    }
  },
  methods: {
    async createPre() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        await this.$store.dispatch('users/createPre', {
          name: this.form.name,
          email: this.form.email,
        })
        const users = this.$store.state.users.users
        if (users && typeof users.response !== 'undefined') {
          if (users.success) {
            this.alertInfoShow(users.response.msg)
            this.clear()
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
    clear() {
      this.form.name = ''
      this.form.email = ''
      this.form.emailConfirm = ''
      this.$v.$reset()
    },
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      emailConfirm: { required, sameAsEmail: sameAs('email') },
    },
  },
}
</script>
