/**
 * Mocking client-server processing
 */
/* eslint-disable */
 const _products = [
    {"id": 1, "isbn": "978-3-446-46386-8", "title": "C++ programmieren", "author": "Ulrich Breymann", "description": "Egal ob Sie C++ lernen wollen oder Ihre Kenntnisse in der Softwareentwicklung mit C++ vertiefen, in diesem Buch finden Sie, was Sie brauchen.", "price": 39.99, "inventory": 10},
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
  
    buyProducts (products, cb, errorCb) {
        // ToDo
    }
  }
  