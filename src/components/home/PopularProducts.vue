<template>
  <v-container class="fill-height mb-12">
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>Popular Products <v-btn to="store" text small color="primary">View All</v-btn></h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
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
      </v-col>
    </v-row>
  </v-container>
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