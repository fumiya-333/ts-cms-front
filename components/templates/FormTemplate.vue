<template>
  <Wrapper>
    <Header />
    <Contents class-name="u-w14 u-m-x-center">
      <Main class-name="u-my10">
        <Form class-name-inner="u-position-relative">
          <slot></slot>
        </Form>
      </Main>
    </Contents>
    <portal to="alertDanger">
      <AlertDanger ref="alertDanger" class-name="u-nv-top70 u-w100"></AlertDanger>
    </portal>
    <Footer />
  </Wrapper>
</template>

<script>
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Wrapper from '@/components/organisms/Wrapper'
import Contents from '@/components/organisms/Contents'
import Main from '@/components/organisms/Main'
import Form from '@/components/organisms/Form'
import AlertDanger from '@/components/molecules/dialogs/AlertDanger'

export default {
  components: { Header, Footer, Wrapper, Contents, Main, Form, AlertDanger },
  methods: {
    alertDangerShow(msg) {
      this.$refs.alertDanger.show(msg)
    },
  },
}
</script>
