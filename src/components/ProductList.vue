<template>
  <div>
    <h3>Products</h3>
    <!-- list of product cards that wraps -->
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="product in products.slice(0, 3)"
        :key="product.id"
      >
        <v-card outlined>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.inventory }}</v-card-text>
          <v-card-actions>
            <v-btn 
              :disabled="!productIsInStock(product)"
              @click="addProductToCart(product)" 
              color="success" outlined
            >
            Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
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

      ...mapGetters('products', {
        productIsInStock: 'productIsInStock'
      })
    },

    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addProductToCart: 'cart/addProductToCart'
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
