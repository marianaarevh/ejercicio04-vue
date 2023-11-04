<template>
  <div class="container">
    <h1>Lista de Artículos</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h3><router-link :to="{ name: 'articleDetails', params: { id: article.id}}">
          {{ article.title }}
        </router-link></h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleListView',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Cómo mejorar la productividad en el trabajo desde casa',
          content: 'Trabajar desde casa puede ser desafiante. Aquí hay algunos consejos prácticos para mejorar tu productividad mientras trabajas desde casa.'
        },
        {
          id: 2,
          title: 'Beneficios de la meditación diaria para la salud mental',
          content: 'La meditación puede tener impactos positivos en la salud mental. Exploramos algunos de los beneficios y cómo empezar con una práctica diaria.'
        },
        {
          id: 3,
          title: 'Viaje gastronómico: descubriendo sabores locales en Asia',
          content: 'Sumérgete en una aventura culinaria explorando los sabores auténticos de la comida local en varios países asiáticos.'
        },
        {
          id: 4,
          title: 'Desarrollo de aplicaciones web progresivas (PWA)',
          content: 'Las PWAs son una tecnología en auge. Aprende sobre cómo desarrollar aplicaciones web que ofrezcan una experiencia similar a la de una aplicación nativa.'
        },
        {
          id: 5,
          title: 'El impacto del cambio climático en el Ártico',
          content: 'El Ártico enfrenta desafíos significativos debido al cambio climático. Analizamos las consecuencias y las posibles soluciones.'
        }
      ]
    };
  }
};
</script>

<style>

ul{
  list-style: none;
}

h3{
  font-weight: 100;
}

li a{
  text-decoration: none;
  color: black;
  padding: 5px;
}

li a:hover{
background-color: rgb(43, 43, 214, 0.1);
}
</style>