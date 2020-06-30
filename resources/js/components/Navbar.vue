<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">StarLight</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <router-link to="/posts" class="nav-link" active-class="active">
                Посты
              </router-link>
          </li>
          <li class="nav-item">
              <router-link to="/notices" class="nav-link" active-class="active">
                Заметки
              </router-link>
          </li>
          <li class="nav-item">
              <router-link to="#" class="nav-link" active-class="active">
                Задачи
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
    }
</script>