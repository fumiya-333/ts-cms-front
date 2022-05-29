<template>
  <Wrapper>
    <Header/>
    <Contents>
      <Main>
        <slot></slot>
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

export default {
    components: { Header, Footer, Wrapper, Contents, Main }
}
</script>
