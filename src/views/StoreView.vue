<template>
  <v-container>
    <v-row>
      <v-col sm="3" offset-lg="1">
        <v-text-field v-model="search" label="Search" @input="filterProducts" />
      </v-col>
      <v-col sm="9" lg="7">
        <div>
          <h3>Products</h3>
          <!-- list of product cards that wraps -->
          <v-row>
            <v-col
              sm="6"
              md="4"
              v-for="product in filteredProducts"
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
  /* eslint-disable */
  import {mapState, mapActions} from 'vuex'
  import ProductCard from '@/components/cards/ProductCard.vue'

  export default {
    components: {
      ProductCard,
    },

    data () {
      return {
        search: '',
        loading: false,
        productIndex: 1
      }
    },

    computed: {
      ...mapState({
        products: state => state.products.items
      }),
      filteredProducts() {
        return this.products.filter(product => {
          return product.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },

    
    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
      }),
      filterProducts() {
        this.fetchProducts(this.search)
      }
    },

  }
</script>

<style scoped>

</style>