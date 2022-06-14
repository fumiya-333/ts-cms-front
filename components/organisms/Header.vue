<template>
  <header class="l-header u-fadein" :class="className">
    <div class="l-header__inner" :class="classNameInner">
      <H1 href="/">{{ $t('title') }}</H1>
    </div>
  </header>
</template>

<script>
import H1 from '@/components/atoms/H1'

export default {
  components: { H1 },
  props: {
    className: {
      type: String,
      default: '',
    },
    classNameInner: {
      type: String,
      default: '',
    },
  },
}
</script>
