<template>
  <Wrapper>
    <Header></Header>
    <Contents class-name="u-w280 u-mx-auto">
      <Main class-name="u-my30">
        <slot></slot>
      </Main>
    </Contents>
    <Footer></Footer>
    <portal-target name="target"></portal-target>
  </Wrapper>
</template>

<script>
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import Wrapper from '@/components/organisms/Wrapper'
import Contents from '@/components/organisms/Contents'
import Main from '@/components/organisms/Main'

export default {
  components: { Header, Footer, Wrapper, Contents, Main },
}
</script>
