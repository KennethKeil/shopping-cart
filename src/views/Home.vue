<template>
  <div>
    <Header />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import ProductList from '@/components/ProductList.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  components: {
    Header,
    ProductList,
    Footer
  }
}
</script>
