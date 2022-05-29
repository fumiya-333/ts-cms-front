<template>
  <div class="p-login">
    <div class="p-login__inner">
      <BaseForm form-class="p-login__inner__form" form-inner-class="p-login__inner__form__inner">
        <FormLabel>メールアドレス</FormLabel>
        <EmailText placeholder="example@example.com"></EmailText>
        <FormLabel>パスワード</FormLabel>
        <PasswordText></PasswordText>
        <Link href="password-reset-pre" href-class="u-flex-end p-login__inner__form__inner__password-reset-link">パスワードを忘れた</Link>
        <div class="p-login__inner__form__inner__btn-area">
          <LoginBtn login-btn-class="p-login__inner__form__inner__btn-area-btn-login"></LoginBtn>
          <CreateLinkBtn create-btn-class="p-login__inner__form__inner__btn-area-btn-create"></CreateLinkBtn>
        </div>
      </BaseForm>
    </div>
  </div>
</template>

<script>
import BaseForm from '@/components/atoms/forms/BaseForm.vue'
import FormLabel from '@/components/atoms/labels/BaseLabel.vue'
import EmailText from '@/components/atoms/texts/EmailText.vue'
import PasswordText from '@/components/atoms/texts/PasswordText.vue'
import Link from '@/components/atoms/links/BaseLink.vue'
import LoginBtn from '@/components/atoms/btns/LoginBtn.vue'
import CreateLinkBtn from '@/components/atoms/btns/CreateLinkBtn.vue'

export default {
    name: "NuxtLogin",
    components: { BaseForm, FormLabel, EmailText, PasswordText, Link, LoginBtn, CreateLinkBtn }
}
</script>
