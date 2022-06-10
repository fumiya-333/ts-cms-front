<template>
  <FormTemplate>
    <FormLabel>{{ $t('form.email') }}</FormLabel>
    <EmailText email-class="u-px2 u-py1 u-text-sz4" :value="$v.form.email.$model" placeholder="example@example.com" @input="$v.form.email.$model = $event"/>
    <div v-if="$v.form.email.$error && !$v.form.email.required" class="c-error-msg">{{ $t('form.email') }}{{ $t('error.required') }}</div>
    <div v-if="$v.form.email.$error && !$v.form.email.email" class="c-error-msg">{{ $t('error.email') }}</div>
    <FormLabel>{{ $t('form.password') }}</FormLabel>
    <PasswordText password-class="u-px2 u-py1 u-text-sz4" :value="$v.form.password.$model" @input="$v.form.password.$model = $event"/>
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="c-error-msg">{{ $t('form.password') }}{{ $t('error.required') }}</div>
    <Link href="password-reset-pre" href-class="u-flex-end u-mt3">パスワードを忘れた</Link>
    <div class="u-mt10">
      <LoginBtn login-btn-class="u-w4 u-h1 u-m-x-center u-align-center u-text-sz4" @click="login"></LoginBtn>
      <CreateLinkBtn create-pre-btn-class="u-w4 u-h1 u-mt2 u-m-x-center u-align-center u-text-sz4"></CreateLinkBtn>
    </div>
  </FormTemplate>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
import Vue from 'vue'
import FormTemplate from '@/components/templates/FormTemplate.vue'
import FormLabel from '@/components/atoms/labels/Label.vue'
import EmailText from '@/components/atoms/texts/EmailText.vue'
import PasswordText from '@/components/atoms/texts/PasswordText.vue'
import Link from '@/components/atoms/links/Link.vue'
import LoginBtn from '@/components/molecules/btns/LoginBtn.vue'
import CreateLinkBtn from '@/components/molecules/btns/CreateLinkBtn.vue'

export default Vue.extend({
  name: "IndexPage",
  components: { FormTemplate, FormLabel, EmailText, PasswordText, Link, LoginBtn, CreateLinkBtn },
  data(){
    return {
      form: {
        email: "",
        password: "",
      }
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
      }
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
