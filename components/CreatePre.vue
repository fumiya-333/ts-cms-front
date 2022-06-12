<template>
  <FormTemplate>
    <Label label-class="u-d-block">{{ $t('form.name') }}</Label>
    <TextPlane
      text-class="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      :value="$v.form.name.$model"
      placeholder="浦島 太郎"
      @input="$v.form.name.$model = $event"
    ></TextPlane>
    <div v-if="$v.form.name.$error && !$v.form.name.required" class="u-mt2 u-text-danger">
      {{ $t('form.name') }}{{ $t('error.required') }}
    </div>
    <Label label-class="u-d-block u-mt3">{{ $t('form.email') }}</Label>
    <TextEmail
      text-class="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      name="email"
      :value="$v.form.email.$model"
      placeholder="example@example.com"
      @input="$v.form.email.$model = $event"
    ></TextEmail>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-mt2 u-text-danger">
      {{ $t('form.email') }}{{ $t('error.required') }}
    </div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="u-mt2 u-text-danger">{{ $t('error.email') }}</div>
    <Label label-class="u-d-block u-mt3">{{ $t('form.password') }}</Label>
    <TextPassword
      text-class="u-d-block u-px2 u-py1 u-mt2 u-text-sz4"
      name="password"
      :value="$v.form.password.$model"
      @input="$v.form.password.$model = $event"
    ></TextPassword>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="u-mt2 u-text-danger">
      {{ $t('form.password') }}{{ $t('error.required') }}
    </div>
    <div class="u-mt10">
      <CreatePreBtn
        btn-class="u-d-block u-w5 u-h1 u-m-x-center u-align-center u-text-sz4"
        @click="createPre"
      ></CreatePreBtn>
    </div>
    <transition name="dialog">
      <ErrorMessage v-show="open" :msg="errorMsg" alert-class="u-nv-top70 u-w100"></ErrorMessage>
    </transition>
  </FormTemplate>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate'
import Label from '@/components/atoms/Label'
import TextEmail from '@/components/atoms/TextEmail'
import CreatePreBtn from '@/components/molecules/btns/CreatePreBtn'
import TextPassword from '@/components/atoms/TextPassword'
import TextPlane from '@/components/atoms/TextPlane'
import ErrorMessage from '@/components/molecules/dialogs/ErrorMessage'

export default {
  components: { FormTemplate, Label, TextEmail, CreatePreBtn, TextPassword, TextPlane, ErrorMessage },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
      open: false,
      errorMsg: '',
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
          this.errorMsg = this.$t('error.api')
          this.open = true
        }
      } else {
        this.errorMsg = this.$t('error.input')
        this.open = true
      }
    },
    execCreatePre() {
      const users = this.$store.state.users.users
      if (users.success) {
        console.log(users)
      } else {
        this.errorMsg = users.response.msg
        this.open = true
      }
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
