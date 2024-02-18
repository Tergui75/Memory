<template>
    <div class="toolbar"> 
        <button class="btn" id="bt1" onclick="memory.Play()">Play</button>  
        <button hidden class="btn" id="bt2" onclick="memory.Play()">Restart</button>
        <button class="btn" id="bt3" onclick="memory.Hidden()">Hidden</button>
        <button hidden class="btn" id="bt4" onclick="memory.Show_all()">Show_all</button>
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