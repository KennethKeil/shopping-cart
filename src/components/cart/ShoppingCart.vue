<template>
  <v-container>
    <v-row>
        <v-col sm="8" offset-md="2" lg="4" offset-lg="2">
          <div>
            <h1>Shopping Cart</h1>
              <v-row
                v-for="product in products" :key="product.id"
              >
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
                        outlined
                        small
                      >
                        Remove from Cart
                      </v-btn>
                    </div>
                  </div>
                </v-card>
              </v-row>
          </div>
        </v-col>
      <v-col sm="4" md="3" order="first" order-sm="last">
         <div>
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
        </div>
      </v-col>
    </v-row>
  </v-container>
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
      ...mapActions('cart', ['checkout'])
    }
  }
</script>

<style scoped>

</style>
