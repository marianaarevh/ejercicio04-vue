<template>
  <div class="container">
    <h1>¡Bienvenido al Blog!</h1>
    <div id="img-container"> <img src="../assets/welcome.png" alt=""> </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style>
body{
  background-image: url("../assets/bg1.jpg");
  
}

img{
  height: 30vh;
  width: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
}
</style>