<template>
  <header class="l-header u-fadein">
    <div class="l-header__inner">
      <H1 href="/">{{ $t('title') }}</H1>
    </div>
  </header>
</template>

<script>
import H1 from '@/components/atoms/H1'

export default {
  components: { H1 },
}
</script>
