<template>
  <FormTemplate ref="formTemplate">
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
    <div class="u-mt10">
      <BtnWarning
        name="createPre"
        class-name="u-d-block u-w5 u-h1 u-mx-auto u-align-center u-text-sz4"
        @click="createPre"
        >新規登録</BtnWarning
      >
    </div>
    <portal to="alertDanger">
      <AlertDanger ref="alertDanger" :class-name="`u-top70 ${$device.isMobile ? 'u-ml2 u-left' : 'u-right-percent5'}`"></AlertDanger>
    </portal>
  </FormTemplate>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate'
import Label from '@/components/atoms/Label'
import TextEmail from '@/components/atoms/TextEmail'
import BtnWarning from '@/components/atoms/BtnWarning'
import TextPassword from '@/components/atoms/TextPassword'
import TextPlane from '@/components/atoms/TextPlane'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'

export default {
  components: { FormTemplate, Label, TextEmail, BtnWarning, TextPassword, TextPlane, AlertDanger },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async createPre() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const response = await this.$store.dispatch('users/createPre', {
          name: this.form.name,
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
        console.log(users)
      } else {
        this.alertDangerShow(users.response.msg)
      }
    },
    alertDangerShow(msg) {
      this.$refs.alertDanger.show(msg)
    },
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required },
    },
  },
}
</script>
