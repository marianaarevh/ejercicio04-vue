<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/articles">Articulos</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
  padding: 5px;
  text-decoration: none;
}

nav a.router-link-exact-active {
    background-color: rgb(43, 43, 214);
    color: white;
  }

.container{
  background-color: antiquewhite;
  padding: 20px;
  margin: 2% 20%;
  height: 50vh;
}
</style>
