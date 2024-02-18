<template>
    <div class="toolbar"> 
        <div id="size">Size :</div>
        <div id="timer">Timer:</div>
        <div id="score">Score :</div>
        <div id="tent">Tent: 5</div>
        <input type="number" id="nom" name="nom">
        <button onclick="">Définir la taille du jeu</button>
        <input type="number" id="timer2" name="timer2">
        <button onclick="">Définir le timer</button>
    </div>
</template>

<script>
export default {
  name: 'GameConfig',
  props: {
    msg: String
  }
}
</script>

<style scoped>


</style>