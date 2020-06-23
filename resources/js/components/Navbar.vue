<template>
  <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <router-link to="/" class="navbar-brand">StarLight</router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/posts" class="nav-link">
                Посты
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/notices" class="nav-link">
                Заметки
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Задачи</a>
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
