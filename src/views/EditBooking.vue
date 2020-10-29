<template>
  <div>
    <Navbar/>
    <div class="container-fluid bg-info" style="height:80vh">

    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapGetters } from 'vuex'
export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      getDetailBooking: 'booking/getDetailBooking'
    })
  }
}
</script>

<style>

</style>
