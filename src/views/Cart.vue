<template>
  <v-container>
    <v-row>
      <v-col sm="8" offset-md="2" lg="4" offset-lg="2">
        <ShoppingCart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'
// import CheckoutBox from '@/components/cart/CheckoutBox.vue'

export default {
  components: {
    ShoppingCart,
    // CheckoutBox
  }
}
</script>