/* eslint-disable */
import shop from "@/api/shop";

export default {
    namespaced: true,

    state: {
        // {id, quantity}
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
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        },
    },

    mutations: {
        pushProductToCart(state, productId) {
            state.items.push({
                id: productId,
                quantity: 1
            })
        },

        popProductFromCart(state, productId) {
            const i = state.items.indexOf(productId);
            state.items.splice(i, 1);
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
            console.log(product);
            console.log(product.id);
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
            console.log(product);
            console.log(product.id);
            const cartItem = state.items.find(item => item.id === product.id)

            if (cartItem.quantity == 1) {
                commit('popProductFromCart', product.id)
            } else {
                commit('decrementItemQuantity', cartItem)
            }
            commit('products/incrementProductInventory', product, {root: true})
        },

        checkout({state, commit}) {
            // Stripe Implementation
            shop.buyProducts(
                state.items,
                () => {
                    commit('emptyCart')
                    commit('setCheckoutStatus', 'success')
                },
                () => {
                    commit('setCheckoutStatus', 'fail')
                }
            )
        },
    }
}
