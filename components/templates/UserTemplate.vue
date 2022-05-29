<template>
  <Wrapper>
    <Header>
      <BaseH1></BaseH1>
    </Header>
    <Contents>
      <Main>
        <slot></slot>
      </Main>
    </Contents>
    <Footer>
      <BaseCopyright />
    </Footer>
  </Wrapper>
</template>

<script>
import Header from '@/components/molecules/Header.vue'
import Footer from '@/components/molecules/Footer.vue'
import Wrapper from '@/components/molecules/Wrapper.vue'
import Contents from '@/components/molecules/Contents.vue'
import Main from '@/components/molecules/Main.vue'
import BaseH1 from '@/components/atoms/headings/BaseH1.vue'
import BaseCopyright from '@/components/atoms/copyrights/BaseCopyright.vue'

export default {
    components: { Header, Footer, Wrapper, Contents, Main, BaseH1, BaseCopyright }
}
</script>
