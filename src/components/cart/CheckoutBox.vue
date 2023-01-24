<template>
    <v-card outlined>
        <v-card-title>Payment Details</v-card-title>

        <v-card-text>
            <p>Total: ${{total}}</p>
            <v-btn
              color="primary"
              @click="checkout"
            >
              Checkout
            </v-btn>
        </v-card-text>
    </v-card>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {

    computed: {
      ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotal'
      }),

      ...mapState('cart', {
        checkoutStatus: state => state.checkoutStatus
      })
    },

    methods: {
      ...mapActions('cart', ['checkout']),
    }
  }
</script>

<style scoped>

</style>