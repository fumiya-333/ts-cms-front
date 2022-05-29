<template>
  <div class="p-users">
    <div class="p-users__inner">
      <BaseForm form-class="p-users__inner__form" form-inner-class="p-users__inner__form__inner">
        <FormLabel>氏名</FormLabel>
        <PlaneText></PlaneText>
        <FormLabel>メールアドレス</FormLabel>
        <EmailText placeholder="example@example.com"></EmailText>
        <FormLabel>パスワード</FormLabel>
        <PasswordText></PasswordText>
        <div class="p-users__inner__form__inner__btn-area">
          <CreateLinkBtn create-btn-class="p-users__inner__form__inner__btn-area-btn-create"></CreateLinkBtn>
        </div>
      </BaseForm>
    </div>
  </div>
</template>

<script>
import BaseForm from '@/components/atoms/forms/BaseForm.vue'
import FormLabel from '@/components/atoms/labels/BaseLabel.vue'
import EmailText from '@/components/atoms/texts/EmailText.vue'
import CreateLinkBtn from '@/components/atoms/btns/CreateLinkBtn.vue'
import PasswordText from '@/components/atoms/texts/PasswordText.vue'
import PlaneText from '@/components/atoms/texts/PlaneText.vue'

export default {
  components: { BaseForm, FormLabel, EmailText, CreateLinkBtn, PasswordText, PlaneText }
}
</script>
