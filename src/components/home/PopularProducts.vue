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
            <ProductCard :product="product"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import ProductCard from '@/components/cards/ProductCard.vue'

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


  }
</script>

<style scoped>

</style>