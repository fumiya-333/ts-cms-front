<template>
  <Wrapper>
    <Header/>
    <Contents contents-class="u-w14 u-m-x-center">
      <Main main-class="u-my20">
        <Form>
          <slot></slot>
        </Form>
      </Main>
    </Contents>
    <Footer/>
  </Wrapper>
</template>

<script>
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Wrapper from '@/components/organisms/Wrapper'
import Contents from '@/components/organisms/Contents'
import Main from '@/components/organisms/Main'
import Form from '@/components/organisms/Form'

export default {
  components: { Header, Footer, Wrapper, Contents, Main, Form }
}
</script>
