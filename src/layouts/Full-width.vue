<template>
    <div class="wrapper">
        <Header />
        <main>
            <router-view/>
        </main>
        <Footer />  
    </div>
</template>
<script>
import Header from  '@/components/header-footer/Header.vue'
import Footer from   '@/components/header-footer/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>
<style lang="sass" scoped>
.wrapper
    height: 100vh
    display: grid
    grid-template-rows: 55px 1fr 55px
    grid-template-columns: 1fr


.wrapper_inner
    max-width: 1200px
    width: 100%
    margin: 2rem auto
</style>>