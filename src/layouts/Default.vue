<template>
    <div class="wrapper">
            <Header/>
        <div class="wrapper_inner">
            <main>
                <router-view/>
            </main>
            <aside>
                <p>Версия игры 2.0</p>
            </aside>
        </div>
        <Footer/>
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
    box-sizing: border-box
    max-width: 1200px
    width: 100%
    margin: 2rem auto
    display: grid
    grid-template-columns: 1fr 250px
    padding: 0 15px
aside
    box-shadow: 0 0 8px 2px #cccccc4f
    padding: 0.5rem 0.8rem
    border-radius: 15px
    margin-left: 15px
@media screen and  (max-width: 990px) 
    .wrapper_inner
        width: 100%
        display: block
    aside
        margin: 0

</style>>