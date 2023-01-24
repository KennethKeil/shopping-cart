/* eslint-disable */
import shop from "@/api/shop";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default {
    namespaced: true,

    state: {
        items: [],
        checkoutStatus: null
    },

    getters: {
        cartProducts(state, getters, rootState, rootGetters) {
            return state.items.map(cartItem => {
                const product = rootState.products.items.find(product => product.id === cartItem.id)
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },

        cartTotal(state, getters) {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
        },
    },

    mutations: {
        pushProductToCart(state, productId) {
            state.items.push({
                id: productId,
                quantity: 1
            })
        },

        removeProductById(state, productId) {
            state.items = state.items.filter(function (obj) {
                return obj.id !== productId;
            });
        },

        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },

        decrementItemQuantity(state, cartItem) {
            cartItem.quantity--
        },

        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        },

        emptyCart(state) {
            state.items = []
        }
    },

    actions: {
        addProductToCart({state, getters, commit, rootState, rootGetters}, product) {
            if (rootGetters['products/productIsInStock'](product)) {
                const cartItem = state.items.find(item => item.id === product.id)
                if (!cartItem) {
                    commit('pushProductToCart', product.id)
                } else {
                    commit('incrementItemQuantity', cartItem)
                }
                commit('products/decrementProductInventory', product, {root: true})
            }
        },

        removeProductFromCart({state, getters, commit, rootState, rootGetters}, product) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (cartItem.quantity == 1) {
                commit('removeProductById', product.id)
            } else {
                commit('decrementItemQuantity', cartItem)
            }
            commit('products/incrementProductInventory', product, {root: true})
        },

        async checkout({state, commit}) {

            const cartItems = state.items;

            console.log("test 1");
            console.log(cartItems);

            // undefinded
            const stripeBody = cartItems.map((item) => {
                return {
                price_data: {
                    currency: "EUR",
                    unit_amount: Number(item.price) * 100,
                    product_data: {
                    name: item.title,
                    description: item.description,
                    images: [item.image],
                    },
                },
                quantity: item.amount,
                };
            });

            console.log("test 2");
            console.log(stripeBody);

            // Error
            const response = await axios.post(
                "https://ivm108.informatik.htw-dresden.de/ewa/g19/php-backend/create-checkout.session.php",
                stripeBody
            );

            console.log(response);

            if (response.status === 200) {
                let { sessionId, pk } = await response.data;

                // Stripe.js will not be loaded until `loadStripe` is called
                const stripe = await loadStripe(pk);
                stripe?.redirectToCheckout({
                    sessionId: sessionId,
                });
            }
        },
    }
}
