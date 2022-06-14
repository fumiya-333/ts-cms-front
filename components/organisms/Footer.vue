<template>
  <footer class="l-footer" :class="className">
    <div class="l-footer__inner" :class="classNameInner">
      <Copyright />
    </div>
  </footer>
</template>

<script>
import Copyright from '@/components/atoms/Copyright'

export default {
  components: { Copyright },
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
