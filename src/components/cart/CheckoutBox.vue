<template>
    <v-card outlined>
        <v-card-title>Payment Details</v-card-title>

        <v-card-text>
            <p>Total: ${{total}}</p>
            <stripe-checkout
              ref="checkoutRef"
              mode="payment"
              :pk="publishableKey"
              :line-items="lineItems"
              :success-url="successURL"
              :cancel-url="cancelURL"
              @loading="v =>loading = v"
            />
            <button @click="submit">Pay Now</button>
        </v-card-text>
    </v-card>
</template>

<script>
  import {StripeCheckout} from '@vue-stripe/vue-stripe'
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    components:{
      StripeCheckout
    },
    data(){
      this.publishableKey = "pk_test_51MTY23AY66r0SMmOkTcIxapEM39UMngZijrH1DWtscD2zuLlpiXMOS9KVhZnJPNFRMVGZ1GgBEOKsEIqspVRKx6700nFiXJd1Z"
      return{
        loading:false,
        lineItems:[
          {
            price:"price_1MTYegAY66r0SMmOXgUJ4WAB",
            quantity:1
          }
        ],
        successURL:'http://localhost:8080/success',
        cancelURL:'http://localhost:8080/error'
      }
    },

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
      submit(){
        // stripe checkout page

        this.$refs.checkoutRef.redirectToCheckout()
      }
    }
  }
</script>

<style scoped>

</style>