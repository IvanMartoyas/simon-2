<template>
<div>
    <h1>Оснонвая информация</h1>
    <ol>
        <li @click="component = 'WhatGaming'">Как играть</li>
        <li @click="component = 'TechnicalFeatures'">Технические моменты</li>
        <li @click="component = 'Technology'">Технологии которые использовались при создании игры</li>
    </ol>
<br>
<hr>
    <component :is="component">
      <router-view/>
    </component>
   
    </div>
</template>
<script>
import TechnicalFeatures from  './_Technical_features'
import Technology from  './_Technology'
import WhatGaming from   './_What_gaming'


export default {
  name: 'App',
  components: {
    TechnicalFeatures,
    Technology,
    WhatGaming
  },
  data() {
    return {
        component: 'WhatGaming'
    }
  },
}

</script>

<style lang="sass" scoped>
li
    cursor: pointer
pre
    background: #ccc
</style>