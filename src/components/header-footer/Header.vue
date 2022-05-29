<template>
    <header>
        <nav>
            <ul>
                <router-link class="link" to="/home">Главная</router-link>
                <router-link class="link" to="/game">Игра</router-link>
            </ul>
        </nav>
    </header>
</template>
<style lang="sass" scoped>
header
    background: #DED4CF
    color: #42464e
nav

    ul
        padding: 0
        display: flex
        margin: 0
.link
    color: #42464e
    padding: 0 1.3rem
    display: flex
    height: 55px
    align-items: center
    text-decoration: none
    overflow: hidden
    &:hover
        font-weight: 600
</style>