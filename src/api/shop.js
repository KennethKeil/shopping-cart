/**
 * Mocking client-server processing
 */
/* eslint-disable */
 const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 529.99, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
    {"id": 4, "title": "Nintendo Switch", "price": 299.99, "inventory": 3},
    {"id": 5, "title": "Gameboy Mug", "price": 89.99, "inventory": 7},
    {"id": 6, "title": "XLS Computer", "price": 379.99, "inventory": 10},
    {"id": 7, "title": "Game Cube", "price": 8.99, "inventory": 2},
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    buyProducts (products, cb, errorCb) {
        // ToDo
    }
  }
  