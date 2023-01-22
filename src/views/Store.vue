<template>
  <v-container>
    <v-row>
      <v-col sm="3" offset-lg="1">
        Sidebar
      </v-col>
      <v-col sm="9" lg="7">
        <ProductList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    ProductList
  }
}
</script>