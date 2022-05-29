<template>
  <User>
    <FormLabel>メールアドレス</FormLabel>
    <EmailText placeholder="example@example.com"/>
    <FormLabel>パスワード</FormLabel>
    <PasswordText/>
    <Link href="password-reset-pre" href-class="u-flex-end p-users__inner__form__inner__password-reset-link">パスワードを忘れた</Link>
    <div class="p-users__inner__form__inner__btn-area">
      <LoginBtn login-btn-class="p-users__inner__form__inner__btn-area-btn-login"></LoginBtn>
      <CreateLinkBtn create-btn-class="p-users__inner__form__inner__btn-area-btn-create"></CreateLinkBtn>
    </div>
  </User>
</template>

<script>
import User from '@/components/organisms/users/User'
import FormLabel from '@/components/atoms/labels/BaseLabel'
import EmailText from '@/components/atoms/texts/EmailText'
import PasswordText from '@/components/atoms/texts/PasswordText'
import Link from '@/components/atoms/links/BaseLink'
import LoginBtn from '@/components/molecules/btns/LoginBtn'
import CreateLinkBtn from '@/components/molecules/btns/CreateLinkBtn'

export default {
  components: { User, FormLabel, EmailText, PasswordText, Link, LoginBtn, CreateLinkBtn }
}
</script>
