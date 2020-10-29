<template>
<div class="wrap">
    <Navbar :img="getDetailUsers.users.data"/>
    <div class="detail-booking">
      <div class="container-fluid bg-primary p-1" style="height: 80vh;">
        <div class="card w-50 h-75 mx-auto my-5 " style="border-radius: 20px">
          <div class="card-body">
            <h5 class="card-title mb-4 font-weight-bold">Booking Pass </h5>
            <div class="row">
              <div class="col-lg-8">
                <div class="card-text border p-3">
                  <div class="row mb-3">
                    <div class="col-lg-4"><img  :src="`${url}/img/${getDetailBooking[0].image_airlines}`" width="120px"></div>
                    <div class="col-lg-3"><h4 class=" font-weight-bold">{{getDetailBooking[0].code_departure}}</h4></div>
                    <div class="col-lg-2"><img src="../../src/assets/assets/img/Vector.png"></div>
                    <div class="col-lg-3"><h4 class="font-weight-bold">{{getDetailBooking[0].code_destination}}</h4></div>
                  </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <p>Code</p>
                        <h6 class="mt-n3 font-weight-bold mb-3">{{getDetailBooking[0].code_airlines}}</h6>
                        <p>Terminal</p>
                        <h6 class="mt-n3 font-weight-bold">A</h6>
                      </div>
                      <div class="col-lg- mb-3">
                        <p>Class</p>
                        <h6 class="mt-n3 font-weight-bold mb-3">{{getDetailBooking[0].name_class}}</h6>
                        <p>Gate</p>
                        <h6 class="mt-n3 font-weight-bold">221</h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <p>Diperbarui</p>
                        <h6 class="mt-n3">{{getDetailBooking[0].departure_day}}</h6>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-4 border p-1 d-flex justify-content-center align-items-center">
                <img src="../assets/assets/img/QR Code 1.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="detail-booking2">
      <div class="container-fluid bg-primary p-1" style="height: 80vh;">
        <div class="card w-100 h-75 mx-auto my-5 " style="border-radius: 20px">
          <div class="card-body">
            <h5 class="card-title mb-4 font-weight-bold">Booking Pass </h5>
            <div class="row">
              <div class="col-lg-8 col-12">
                <div class="card-text p-3">
                  <div class="row mb-3">
                    <div class="col-lg-4 col-4"><img  :src="`${url}/img/${getDetailBooking[0].image_airlines}`" width="120px"></div>
                    <div class="col-lg-3 col-3"><h4 class=" font-weight-bold">{{getDetailBooking[0].code_departure}}</h4></div>
                    <div class="col-lg-2 col-2"><img src="../../src/assets/assets/img/Vector.png"></div>
                    <div class="col-lg-3 col-3"><h4 class="font-weight-bold">{{getDetailBooking[0].code_destination}}</h4></div>
                  </div>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <p>Code</p>
                        <h6 class="mt-n3 font-weight-bold mb-3">{{getDetailBooking[0].code_airlines}}</h6>
                        <p>Terminal</p>
                        <h6 class="mt-n3 font-weight-bold">A</h6>
                      </div>
                      <div class="col-lg- mb-3">
                        <p>Class</p>
                        <h6 class="mt-n3 font-weight-bold mb-3">{{getDetailBooking[0].name_class}}</h6>
                        <p>Gate</p>
                        <h6 class="mt-n3 font-weight-bold">221</h6>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-6">
                        <p>Diperbarui</p>
                        <h6 class="mt-n3">{{getDetailBooking[0].departure_day}}</h6>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-4 col-12  p-1 d-flex justify-content-end mt-n5">
                <img src="../assets/assets/img/QR Code 1.png" class="mt-n5" width="80px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      url: process.env.VUE_APP_API_URL
    }
  },
  computed: {
    ...mapGetters({
      getDetailUsers: 'users/getDetailUsers',
      getDetailBooking: 'booking/getDetailBooking'
    })
  },
  methods: {
    ...mapActions({
      getId: 'users/getDetailUsers'
    })
  },
  mounted () {
    this.getId(this.id)
  }
}
</script>

<style scoped>
.warp2{
    position: fixed;
    background: orange;
    height: 100%;
}
.detail-booking2 {
    display: none;
  }
@media(max-width:600px) {
  .detail-booking {
    display: none;
  }
  .detail-booking2 {
    display: block;
  }
}
</style>
