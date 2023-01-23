<template>
  <v-container>
    <v-row>
      <v-col sm="3" offset-lg="1">
        Sidebar
      </v-col>
      <v-col sm="9" lg="7">
        <div>
          <h3>Products</h3>
          <!-- list of product cards that wraps -->
          <v-row>
            <v-col
              sm="6"
              md="4"
              v-for="product in products"
              :key="product.id"
            >
              <ProductCard :product="product"/>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import ProductCard from '@/components/Cards/ProductCard.vue'

  export default {
    components: {
      ProductCard
    },

    data () {
      return {
        loading: false,
        productIndex: 1
      }
    },

    computed: {
      ...mapState({
        products: state => state.products.items
      }),
    },

    
    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
      })
    },

    created () {
      this.loading = true
      this.fetchProducts()
        .then(() => this.loading = false)
    }
  }
</script>

<style scoped>

</style>