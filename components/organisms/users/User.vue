<template>
  <div class="p-users">
    <div class="p-users__inner">
      <BaseForm form-class="p-users__inner__form" form-inner-class="p-users__inner__form__inner">
        <slot></slot>
      </BaseForm>
    </div>
  </div>
</template>

<script>
import BaseForm from '@/components/atoms/forms/BaseForm'

export default {
  components: { BaseForm }
}
</script>
