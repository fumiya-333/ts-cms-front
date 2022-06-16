<template>
  <FormTemplate ref="formTemplate">
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
    <div class="u-mt10">
      <BtnWarning
        name="createPre"
        class-name="u-d-block u-w5 u-h1 u-mx-auto u-align-center u-text-sz4"
        @click="createPre"
        >新規登録</BtnWarning
      >
    </div>
    <portal to="alertDanger">
      <AlertDanger
        ref="alertDanger"
        :class-name="`u-top70 ${$device.isMobile ? 'u-ml2 u-left' : 'u-right-percent5'}`"
      ></AlertDanger>
    </portal>
  </FormTemplate>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate'
import Label from '@/components/atoms/Label'
import TextEmail from '@/components/atoms/TextEmail'
import BtnWarning from '@/components/atoms/BtnWarning'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'

export default {
  components: { FormTemplate, Label, TextEmail, BtnWarning, AlertDanger },
  data() {
    return {
      form: {
        email: '',
      },
    }
  },
  methods: {
    async createPre() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const response = await this.$store.dispatch('users/createPre', {
          email: this.form.email,
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
      email: { required, email },
    },
  },
}
</script>
