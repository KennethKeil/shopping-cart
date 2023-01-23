<template>
  <v-card outlined>
    <!--<v-img :src="product.image" height="200px"/>-->
    <v-img src="../../assets/images/cplus-lernen.jpeg" height="200px"/>
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
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    props: {
      product: Object,
    },

    data () {
      return {
        loading: false,
        productIndex: 1,
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