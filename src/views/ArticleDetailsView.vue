<template>
  <div class="container">
    <h2>Detalles del Artículo</h2>
      <p>ID: {{ $route.params.id }} </p>
      <p></p>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailsView',
};
</script>
