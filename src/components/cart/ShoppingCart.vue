<template>
  <v-card 
    outlined
    min-width="100%"
    class="mb-5 pa-4"
  >
    <div class="d-flex">
      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.title}}
        </v-card-title>

        <v-card-subtitle>
          ${{ product.price }}
        </v-card-subtitle>

        <v-card-subtitle>
          {{ product.quantity }}
        </v-card-subtitle>

        <v-btn
          color="error"
          class="ml-4"
          @click="removeProductFromCart(product)"
          outlined
          small
        >
          Remove from Cart
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    props: {
      product: Object,
    },

    computed: {
      ...mapGetters('cart', {
        products: 'cartProducts',
      }),

      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },

    methods: {
      ...mapActions({
        removeProductFromCart: 'cart/removeProductFromCart'
      })
    }
  }
</script>

<style scoped>

</style>
