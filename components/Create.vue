<template>
  <FormTemplate>
    <Label class-name="u-d-block u-mt3">{{ $t('form.name') }}</Label>
    <Label class-name="u-d-block u-ml2 u-mt2">{{ form.name }}</Label>
    <Label class-name="u-d-block u-mt3">{{ $t('form.email') }}</Label>
    <Label class-name="u-d-block u-ml2 u-mt2">{{ form.email }}</Label>
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
    <Label class-name="u-d-block u-mt3">{{ $t('form.passwordConfirm') }}</Label>
    <TextPassword
      class-name="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      name="password"
      :value="$v.form.passwordConfirm.$model"
      @input="$v.form.passwordConfirm.$model = $event"
    ></TextPassword>
    <div v-if="$v.form.passwordConfirm.$error && !$v.form.passwordConfirm.required" class="u-mt2 u-text-danger">
      {{ $t('form.passwordConfirm') }}{{ $t('error.required') }}
    </div>
    <div v-if="$v.form.passwordConfirm.$error && !$v.form.passwordConfirm.sameAsPassword" class="u-mt2 u-text-danger">
      {{ $t('form.password') }}と{{ $t('form.passwordConfirm') }}{{ $t('error.sameAs') }}
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
      <AlertDanger
        ref="alertDanger"
        :class-name="`u-top70 ${$device.isMobile ? 'u-ml2 u-left' : 'u-right-percent5'}`"
      ></AlertDanger>
      <AlertInfo
        ref="alertInfo"
        :class-name="`u-top70 ${$device.isMobile ? 'u-ml2 u-left' : 'u-right-percent5'}`"
      ></AlertInfo>
    </portal>
  </FormTemplate>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate'
import Label from '@/components/atoms/Label'
import BtnWarning from '@/components/atoms/BtnWarning'
import TextPassword from '@/components/atoms/TextPassword'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'
import AlertInfo from '@/components/molecules/dialogs/AlertInfo'

export default {
  components: { FormTemplate, Label, BtnWarning, TextPassword, AlertDanger, AlertInfo },
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
        const response = await this.$store.dispatch('users/create', {
          email: this.form.email,
          password: this.form.password,
        })
        if (response) {
          this.execCreatePre()
        } else {
          this.alertDangerShow(this.$t('error.api'))
        }
      } else {
        this.alertDangerShow(this.$t('error.input'))
      }
    },
    execCreatePre() {
      const users = this.$store.state.users.users
      if (users && users.success) {
        this.alertInfoShow(users.response.msg)
      } else {
        this.alertDangerShow(users.response.msg)
      }
    },
    alertDangerShow(msg) {
      this.$refs.alertDanger.show(msg)
    },
    alertInfoShow(msg) {
      this.$refs.alertInfo.show(msg)
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
