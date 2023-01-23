/* eslint-disable */
import shop from "@/api/shop";
import axios from 'axios';

export default {
    namespaced: true,

    state: {
        items: []
    },

    getters: {
        availableProducts(state, getters) {
            return state.items.filter(product => product.inventory > 0)
        },

        productIsInStock() {
            return (product) => {
                return product.inventory > 0
            }
        }
    },

    mutations: {
        setProducts(state, products) {
            // update products
            state.items = products
        },

        decrementProductInventory(state, product) {
            product.inventory--
        },

        incrementProductInventory(state, cartItem) {
            const product = state.items.find(item => item.id === cartItem.id)
            product.inventory++
        }
    },

    actions: {
        fetchProducts({commit}) {
            return new Promise((resolve, reject) => {
                axios.get(`https://ivm108.informatik.htw-dresden.de/ewa/g17/php-backend/read.php`)
                    .then(response => {
                        commit('setProducts', response.data)
                        resolve()
                    })
                    .catch(e => {
                        this.errors.push(e)
                        reject()
                    })
            })
        }
    }
}
