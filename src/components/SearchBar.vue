<template>
  <div>
    <v-text-field v-model="search" label="Search" />
    <div v-for="product in filteredProducts" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' }
      ]
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>