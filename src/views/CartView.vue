<template>
  <v-container>
    <v-row>
        <v-col sm="8" offset-md="2" lg="4" offset-lg="2">
          <div>
            <h1>Shopping Cart</h1>
            <v-row
              v-for="product in products" :key="product.id"
            >
              <ShoppingCart :product="product"/>
            </v-row>
          </div>
        </v-col>
      <v-col sm="4" md="3" order="first" order-sm="last">
         <div>
          <CheckoutBox />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import ShoppingCart from '@/components/cart/ShoppingCart.vue'
import CheckoutBox from '@/components/cart/CheckoutBox.vue'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  components: {
    ShoppingCart,
    CheckoutBox,
  },

  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
    }),
  },
}
</script>