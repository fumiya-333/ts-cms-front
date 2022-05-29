<template>
  <Wrapper>
    <Header>
      <H1></H1>
    </Header>
    <Contents>
      <Main>
        <slot></slot>
      </Main>
    </Contents>
    <Footer>
      <Copyright />
    </Footer>
  </Wrapper>
</template>

<script>
import Header from '@/components/molecules/Header.vue';
import Footer from '@/components/molecules/Footer.vue';
import Wrapper from '@/components/molecules/Wrapper.vue';
import Contents from '@/components/molecules/Contents.vue';
import Main from '@/components/molecules/Main.vue';
import H1 from '@/components/atoms/headings/H1.vue';
import Copyright from '@/components/atoms/copyrights/Copyright.vue';

export default {
    name: "NuxtLoginTemplate",
    components: { Header, Footer, Wrapper, Contents, Main, H1, Copyright }
}
</script>
