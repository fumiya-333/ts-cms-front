<template>
  <User>
    <FormLabel>{{ $t('form.email') }}</FormLabel>
    <EmailText placeholder="example@example.com"></EmailText>
    <div class="p-users__inner__form__inner__btn-area">
      <CreateLinkBtn create-btn-class="p-users__inner__form__inner__btn-area-btn-create"></CreateLinkBtn>
    </div>
  </User>
</template>

<script>
import User from '@/components/organisms/users/User'
import FormLabel from '@/components/atoms/labels/BaseLabel'
import EmailText from '@/components/atoms/texts/EmailText'
import CreateLinkBtn from '@/components/molecules/btns/CreateLinkBtn'

export default {
  components: { User, FormLabel, EmailText, CreateLinkBtn }
}
</script>
