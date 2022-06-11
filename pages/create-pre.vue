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
    />
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
    />
    <div v-if="$v.form.password.$error && !$v.form.password.required" class="u-mt2 u-text-danger">
      {{ $t('form.password') }}{{ $t('error.required') }}
    </div>
    <div class="u-mt10">
      <CreatePreBtn
        create-pre-btn-class="u-d-block u-w5 u-h1 u-m-x-center u-align-center u-text-sz4"
        @click="createPre"
      ></CreatePreBtn>
    </div>
  </FormTemplate>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email } from 'vuelidate/lib/validators'
import FormTemplate from '@/components/templates/FormTemplate.vue'
import Label from '@/components/atoms/Label.vue'
import TextEmail from '@/components/atoms/TextEmail.vue'
import CreatePreBtn from '@/components/molecules/btns/CreatePreBtn.vue'
import TextPassword from '@/components/atoms/TextPassword.vue'
import TextPlane from '@/components/atoms/TextPlane.vue'

export default Vue.extend({
  name: 'CreatePrePage',
  components: { FormTemplate, Label, TextEmail, CreatePreBtn, TextPassword, TextPlane },
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
    createPre() {
      this.$v.$touch()
      // if(!this.$v.$invalid){

      // }
    },
  },
  validations: {
    form: {
      name: { required },
      email: { required, email },
      password: { required },
    },
  },
})
</script>
