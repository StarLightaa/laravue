<template>
  <main>
    <router-view></router-view> 
  </main>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
            console.log('Component mounted.')
        }
  }
</script>
