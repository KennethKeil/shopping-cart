<template>
  <div>
    <Header />
    <PopularProducts />
    <Placeholder />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import PopularProducts from '@/components/home/PopularProducts.vue'
import Placeholder from '@/components/home/Placeholder.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  components: {
    Header,
    PopularProducts,
    Placeholder,
    Footer,
  }
}
</script>
