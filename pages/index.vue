<template>
  <FormTemplate>
    <Label label-class="u-d-block">{{ $t('form.email') }}</Label>
    <TextEmail text-class="u-d-block u-px2 u-py1 u-mt2 u-text-sz4" name="email" :value="$v.form.email.$model" placeholder="example@example.com" @input="$v.form.email.$model = $event"/>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="u-mt2 u-text-danger">{{ $t('form.email') }}{{ $t('error.required') }}</div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="u-mt2 u-text-danger">{{ $t('error.email') }}</div>
    <Label label-class="u-d-block u-mt3">{{ $t('form.password') }}</Label>
    <TextPassword text-class="u-d-block u-px2 u-py1 u-mt2 u-text-sz4" name="password" :value="$v.form.password.$model" @input="$v.form.password.$model = $event"/>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="u-mt2 u-text-danger">{{ $t('form.password') }}{{ $t('error.required') }}</div>
    <Link href="password-reset-pre" href-class="u-flex-end u-mt3">パスワードを忘れた</Link>
    <div class="u-mt10">
      <LoginBtn btn-class="u-d-block u-w5 u-h1 u-m-x-center u-align-center u-text-sz4" @click="login"></LoginBtn>
      <CreateLinkBtn create-pre-btn-class="u-d-block u-w5 u-h1 u-mt2 u-m-x-center u-align-center u-text-sz4"></CreateLinkBtn>
    </div>
    <WarningAlert :open="open" :msg="warningMsg"></WarningAlert>
  </FormTemplate>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
import Vue from 'vue'
import FormTemplate from '@/components/templates/FormTemplate.vue'
import Label from '@/components/atoms/Label.vue'
import TextEmail from '@/components/atoms/TextEmail.vue'
import TextPassword from '@/components/atoms/TextPassword.vue'
import Link from '@/components/atoms/Link.vue'
import LoginBtn from '@/components/molecules/btns/LoginBtn.vue'
import CreateLinkBtn from '@/components/molecules/btns/CreateLinkBtn.vue'
import WarningAlert from '@/components/molecules/dialogs/WarningAlert.vue'

export default Vue.extend({
  name: "IndexPage",
  components: { FormTemplate, Label, TextEmail, TextPassword, Link, LoginBtn, CreateLinkBtn, WarningAlert },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      open: false,
      warningMsg: "",
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    async login() {
      this.$v.$touch()
      if(!this.$v.$invalid){
        await this.$store.dispatch('users/login', { email: this.form.email, password: this.form.password })
        const users = this.$store.state.users.users
        if(users.success){
          console.log(users)
        }else{
          this.showWarningMsg(users.response.msg)
        }
      }
    },
    showWarningMsg(warningMsg: string) {
      this.warningMsg = warningMsg
      this.open = true
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    }
  }
})
</script>
