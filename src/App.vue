<template>
  <v-app>
    <TopNav />
    <v-main class="mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'app',
  components: {
    TopNav,
  },
}
</script>