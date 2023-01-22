<template>
  <v-app>
    <TopNav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'app',
  components: {
    TopNav
  },
}
</script>