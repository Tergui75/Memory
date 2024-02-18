<template>
  <AppHeader msg="Welcome to Your Vue.js App"/>
  <AppContent msg="Welcome to Your Vue.js App"/>
  <GameConfig msg="Welcome to Your Vue.js App"/>
  <GamePlay msg="Welcome to Your Vue.js App"/>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'
import GamePlay from './components/GamePlay.vue'
import GameConfig from './components/GameConfig.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
    GamePlay,
    GameConfig
  }
}



</script>

<style>

</style>
