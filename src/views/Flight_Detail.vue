<template>
  <div style="overflow-y:hidden">
    <Navbar :img="getDetailUsers.users.data"/>
    <div class="row">
      <div class="box">
        <div class="col-lg-12 ml-5 items">
          <img
            src="../assets/assets/img/vector 3 (2).png"
            class="big-airlines"
          />
          <div class="row">
            <div class="col-lg-6">
              <h4 class="contact">Contact Person Details</h4>
            </div>
            <div class="col-lg-3">
              <h4>Flight Details</h4>
            </div>
            <div class="col-lg-2">
              <h5 style="font-size: 14px; margin-top: -15px; color: white">
                View Detailss
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content" style="background-color:#F5F6FA; height:200vh" v-for="(getUser , index) in getDetailUsers.users.data " :key="index">
          <div class="row">
            <div class="col-lg-6">
                  <div class="card1">
                    <!-- Material input -->
                    <div class="md-form">
                      <input type="text" id="fullname" class="form-control" v-model="getUser.name" readonly>
                      <label for="fullname">Full Name</label>
                    </div>
                    <div class="md-form">
                      <input type="email" id="email" class="form-control" v-model="getUser.email" readonly>
                      <label for="email">Email </label>
                    </div>
                    <div class="md-form">
                      <input type="number" id="phone_number" class="form-control" v-model="getUser.phone_number">
                      <label for="phone_number">Phone Number</label>
                    </div>
                    <div class="alert alert-danger" role="alert">
                      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
                      Make sure the customer data is correct
                    </div>
                  </div>
            </div>
            <div class="col-lg-6">
                <div class="card2" v-for="(getFlight,index) in getFlightDetail.findtiket.data" :key="index">
                  <div class="row">
                    <div class="col-md-6 logo-airlines">
                      <img  :src="`${url}/img/${getFlight.image_airlines}`" width="120px">
                    </div>
                    <div class="col-md-6 mt-3">{{getFlight.name_airlines}}</div>
                  </div>
                  <div class="row text-city mt-5">
                    <img src="../assets/assets/img/Vector (3).png" >
                    <div class="col-md-6">{{getFlight.name_departure_city}} ({{getFlight.code_departure}})</div>
                    <div class="col-md-6">{{getFlight.city_arrived}} ({{getFlight.code_destination}})</div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <p>Sunday, 15 August 2020 | 12:33 - 15:2</p>
                    </div>
                  </div>
                  <div class="row mt-2 checked">
                    <div class="col-md-12">
                      <b-icon-check-circle-fill></b-icon-check-circle-fill> Refundable
                    </div>
                  </div>
                  <div class="row mt-2 checked">
                    <div class="col-md-12">
                      <b-icon-check-circle-fill></b-icon-check-circle-fill> Can reschedule
                    </div>
                  </div>
                  <hr>
                  <div class="row payment">
                    <div class="col-md-6">
                      <h5>Total Payement</h5>
                    </div>
                    <div class="col-md-6" v-if="asurance===true">
                      <h4>$ {{getFlight.price + 2.00}}
                        <img src="../assets/assets/img/btnback (2).png" alt="">
                      </h4>
                    </div>
                    <div v-else>
                      <h4>$ {{getFlight.price}}
                        <img src="../assets/assets/img/btnback (2).png" alt="">
                      </h4>
                    </div>
                  </div>
              </div>
          </div>
          <div class="row passanger">
            <h3>Passenger Details</h3>
           <div class="row">
              <div class="col-lg-12">
                <div class="box-passanger">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="alert alert-info d-flex" role="alert">
                          Passenger : 1 Adult
                          <div class="custom-control custom-switch" style="text-align:right">
                          <span class="mr-5" style="margin-left:150px">Same as contact person</span>
                          <input type="checkbox" class="custom-control-input ml-3" id="customSwitches">
                          <label class="custom-control-label" for="customSwitches"></label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12" v-for="(getUser , index) in getDetailUsers.users.data " :key="index">
                            <!-- Material input -->
                            <div class="md-form">
                              <input placeholder="Mr" type="text" id="title" class="form-control" v-model="Mr" value="Mr" readonly>
                              <label for="title" class="font-weight-bold">Title</label>
                            </div>
                             <!-- Material input -->
                            <div class="md-form">
                              <input placeholder="full_name" type="text" id="fullname" class="form-control" v-model="getUser.name" readonly>
                              <label for="fullname" class="font-weight-bold">Full Name</label>
                            </div>
                             <!-- Material input -->
                            <div class="md-form">
                              <input placeholder="nationality" type="text" id="nationality" class="form-control" v-model="address" readonly>
                              <label for="nationality" class="font-weight-bold">Nationality</label>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
           </div>
          </div>
           <div class="row passanger-details">
            <h3>Passenger Details</h3>
           <div class="row">
              <div class="col-lg-12">
                <div class="box-passanger-details">
                    <div class="row">
                      <div class="col-lg-12 insurance">
                       <div class="row">
                         <div class="col-lg-6">
                            <input type="checkbox" aria-label="Checkbox for following text input" v-model="asurance">
                          Travel Insurance
                       </div>
                       <div class="col-lg-6 text-right" style="color: rgb(158, 155, 155);">
                         <span style="color:#2395ff">$2,00</span>/pax
                       </div>
                       </div>
                       <hr>
                       <div class="message">
                         <p>Get travel compensation up to $ 10.000,00</p>
                       </div>
                       <div class="buton">
                         <span @click="process" style="cursor:pointer">Proceed to Payment</span>
                       </div>
                    </div>
                  </div>
              </div>
            </div>
           </div>
          </div>
      </div>
      <div class="ticket-card" v-for="(getFlight,index) in getFlightDetail.findtiket.data" :key="index">
       <div class="row">
         <div class="col-12">
            <img src="../assets/assets/img/ticketBackground.png" height="550px" >
         </div>
       </div>
       <div class="row text-tiket">
         <img src="../assets/assets/img/Vector (3).png" >
         <div class="from ml-5">{{getFlight.code_departure}}</div>
         <div class="to mr-5">{{getFlight.code_destination}}</div>
         <div class="time1">12:33</div>
         <div class="time2">18:33</div>
       </div>
       <div class="row logo-airliness">
         <div class="col-6">
           <img :src="`${url}/img/${getFlight.image_airlines}`" alt="">
         </div>
         <div class="col-6">
           <b-icon icon="star-fill" variant="warning" class="ml-1"></b-icon>
           <b-icon icon="star-fill" variant="warning" class="ml-1"></b-icon>
           <b-icon icon="star-fill" variant="warning" class="ml-1"></b-icon>
           <b-icon icon="star-fill" variant="warning" class="ml-1"></b-icon>
           <b-icon icon="star-fill" variant="warning" class="ml-1"></b-icon>
           <br>
           <span style="font-size:14px;margin-left:10px">120k review</span>
         </div>
         <div class="row mt-5 code" style="width:400px">
           <div class="col-3">Code</div>
           <div class="col-3">Class</div>
           <div class="col-3">Terminal</div>
           <div class="col-3">Gate</div>
         </div>
           <div class="row code " style="width:400px; font-weight:bold;border-bottom:0.1px solid grey">
            <div class="col-3">{{getFlight.code_airlines}}</div>
            <div class="col-3">{{getFlight.name_class}}</div>
            <div class="col-3 text-center">{{terminal}}</div>
            <div class="col-3">{{gate}}</div>
         </div>
         <br>
         <br>
       </div>
         <div class="row passengers">
           <span class="badge ml-3" style="line-height:24px;border-radius:100%; width:30px;height:30px"><span style="color:#2395FF">{{getFlight.child}}</span></span>
           <div class="col-6 circle">Child</div>
           <span class="badge ml-3" style="line-height:24px;border-radius:100%; width:30px;height:30px"><span style="color:#2395FF">{{getFlight.adult}}</span></span>
           <div class="col circle">Adults</div>
         </div>
         <div class="row">
           <div class="col-12 ml-4 font-weight-bold">Facilities</div>
         </div>
           <div class="row ml-4 mt-5">
              <div class="col-6" v-if="getFlight.name_facilities === 'Luggage'">
                <div class="snack">
                  <img src="../assets/assets/img/Vector (5).png" >
                  <span style="color:white;font-family:poppinsBold; line-height:50px" class="ml-5">{{getFlight.name_facilities }}</span>
                </div>
              </div>
           </div>
           <div class="row ml-4 mt-5">
             <div class="col-6 " v-if="getFlight.name_facilities === 'Wi-fi'">
               <div class="wifi">
                 <img src="../assets/assets/img/Vector (6).png" >
                  <span style="color:white;font-family:poppinsBold; line-height:50px" class="ml-5">{{getFlight.name_facilities }}</span>
               </div>
             </div>
           </div>
           <div class="row ml-4 mt-5">
             <div class="col-7 mt-3" v-if="getFlight.name_facilities === 'In-Flight Meal'">
               <div class="pass">
                 <img src="../assets/assets/img/Vector (7).png" >
                  <span style="color:white;font-family:poppinsBold; line-height:50px" class="ml-5">{{getFlight.name_facilities }}</span>
               </div>
             </div>
           </div>
             <div class="row amount ml-5">
               <div class="col-8">Total you'll pay</div>
               <div class="col-4" style="font-family:poppinsBold;font-weight:600; color:#2395FF">{{getFlight.price}}</div>
             </div>
              <div class="row booking">
               <span @click="process">Booking</span>
             </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapGetters, mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      url: process.env.VUE_APP_API_URL,
      id_airlines: null,
      address: null,
      amount: null,
      asurance: null,
      gate: null,
      terminal: null
    }
  },
  computed: {
    ...mapState({
      id: 'id'
    }),
    ...mapGetters({
      getFlightDetail: 'findtiket/getFlightDetail',
      getDetailUsers: 'users/getDetailUsers'
    })
  },
  methods: {
    ...mapActions({
      actionsFlightDetail: 'findtiket/getFlightDetail',
      getId: 'users/getDetailUsers',
      insertBooking: 'booking/insertBooking'
    }),
    process () {
      const dataAirlines = this.getFlightDetail.findtiket.data[0]
      const id = this.id
      const idAirlines = dataAirlines.id_airlines
      const codeAirlines = dataAirlines.code_airlines
      const codeDeparture = dataAirlines.code_departure
      const codeDestination = dataAirlines.code_destination
      this.amount = dataAirlines.price
      if (this.asurance === true) {
        this.amount += 2
      } else {
        this.amount = dataAirlines.price
      }
      const data = {
        id_user: id,
        id_airlines: idAirlines,
        code_airlines: codeAirlines,
        code_departure: codeDeparture,
        code_destination: codeDestination,
        total_payment: this.amount
      }
      this.insertBooking(data)
        .then(res => {
          alert(res)
          setTimeout(() => {
            window.location = '/mybooking'
          }, 2000)
          Swal.fire(
            'Good job!',
        `${res}`,
        'success'
          )
        })
    }
  },
  mounted () {
    this.actionsFlightDetail(this.$route.params.id_airlines)
    this.getId(this.id)
    const dataUsers = this.getDetailUsers.users.data[0]
    const addres = dataUsers.address
    const pecah = addres.split(',')
    this.address = pecah[1]
    const gate = this.getFlightDetail.findtiket.data[0].code_airlines
    const splits = gate.split('-')
    this.gate = splits[1]
    this.terminal = splits[0]
  }
}
</script>

<style scoped>
#app {
  height: 300vh;
}
.big-airlines {
  position: absolute;
  top: -90px;
  left: -20px;
  width: 250px;
}

.items {
  position: relative;
}
.box {
  height: 300vh;
  overflow-x: hidden;
  width: 100%;
  height: 216px;
  background-color: #2395ff;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.items {
  margin-top: 100px;
  /* margin: auto 20px; */
}
.items h4 {
  color: white;
  margin-top: -20px;
  margin-left: 120px;
  z-index: 1;
}
.card1 {
  padding: 20px;
  position: absolute;
  top: -50px;
  left: 60px;
  background-color: #FFFFFF;
  border-radius: 15px;
  width: 700px;
}
.card2 {
  padding: 20px;
  position: absolute;
  top: -50px;
  left: 100px;
  background-color: #FFFFFF;
  border-radius: 15px;
  width: 550px;
}
.card2 p {
  font-size: 14px;
  margin-left: 86px;
}
.logo-airlines {
  padding-left: 100px;
}
.text-city {
  position: relative;
  margin-left: 70px;
  font-family: poppinsBold;
  font-weight: 300;
}
.text-city img {
  position: absolute;
  left: 175px;
}
.checked {
  color: #2395ff;
  margin-left: 70px;
}
.payment {
  margin-left: 70px;
}
.payment h5 {
  font-weight: bold;
}
.payment h4 {
  color: #2395ff;
  text-align: right;
  font-weight: bold;
}
.content {
  position: relative;
}
.passanger {
  padding: 20px;
  position: absolute;
  top: 300px;
  left: 50px;
}
.passanger h3 {
  font-family: poppinsBold;
  font-weight: 300;
}
.box-passanger {
  padding: 20px;
  box-sizing: border-box;
  margin-top: -35px;
  position: absolute;
  top: 100px;
  left: -253px;
  background-color: #FFFFFF;
  border-radius: 15px;
  width: 700px;
}
.passanger-details {
  padding: 20px;
  position: absolute;
  top: 750px;
  left: 50px;
}
.passanger-details h3 {
  font-family: poppinsBold;
  font-weight: 300;
}
.box-passanger-details {
  padding: 20px;
  box-sizing: border-box;
  margin-top: -35px;
  position: absolute;
  top: 100px;
  left: -253px;
  background-color: #FFFFFF;
  border-radius: 15px;
  width: 700px;
}
.insurance {
  font-weight: bold;
}
.buton {
  width: 220px;
  height: 40px;
  position: absolute;
  top: 150px;
  background-color: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  margin-left: 235px;
}
.buton span{
  line-height: 40px;
  margin-left: 25px;
}
.ticket-card {
  display: none;
}
/* Break-Point */
@media (max-width: 600px) {
.card1,.passanger,.passanger-details,.card2 {
  display: none;
}
.card2 {
  width: 470px;
  margin-left: -80px;
}
  .contact {
    display: none;
  }
  .items h4 {
    margin-left: -32px;
  }
  .items h5 {
    text-align: right;
    margin-right: 70px;
  }
  .ticket-card {
    display: block;
  }
  .ticket-card img {
    position: relative;
    margin-top: -100px;
    margin-left: -20px;
    width: 530px;
  }
  .text-tiket {
    position: absolute;
    display: flex;
    padding: auto 40px;
    width: 420px;
    justify-content: space-between;
    top: -40px;
    left: 40px;
    font-size: 24px;
    font-family: poppinsBold;
    font-weight: 600;
  }
  .text-tiket img{
    position: absolute;
    top: 100px;
    left: 220px;
    width: 20px ;
    height:  20px ;
  }
  .time1 {
    position: absolute;
    font-size: 12px;
    left: 55px;
    top: 28px;
    opacity: .7;
  }
  .time2 {
    position: absolute;
    right: 55px;
    top: 28px;
    opacity: .7;
    font-size: 12px;
  }
.logo-airliness {
  display: flex;
   position: absolute;
  top: 80px;
  left: 20px;
   width: 500px;
   justify-content: space-between;
   margin: auto 40px;
}
.logo-airliness img {
  margin-top: -20px;
  width: 120px;
}
.passengers {
  width: 450px;
  margin: 10px;
   position: absolute;
  top: 280px;
  left: 40px;
  font-family: poppinsNormal;
}
.badge {
  background: rgba(35, 149, 255, 0.18);
}
.snack {
  position: relative;
  width: 190px;
  height: 50px;
  background-color: #6DDA6B;
  border-radius: 10px;
}
.wifi {
  position: relative;
  width: 190px;
  height: 50px;
 background: #7861D7;
border-radius: 10px;
}
.pass {
  position: relative;
  width: 190px;
  height: 50px;
 background: #E45D32;
border-radius: 10px;
}
.snack img,.wifi img,.pass img {
  width: 20px;
}
.snack{
  position: relative;
}
.snack img {
  position: absolute;
  top: 115px;
  left: 30px;
}
.wifi img {
  position: absolute;
  top: 115px;
  left: 35px;
}
.pass img {
  position: absolute;
  top: 118px;
  left: 30px;
}
.amount {
  margin-top: 60px;
}
.booking {
  margin-left: 140px;
  cursor: pointer;
  font-family: poppinsBold;
  color: #FFFFFF;
  width: 250px;
  height: 40px;
  background-color: turquoise;
  margin-top: 40px;
  background: #2395FF;
box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
border-radius: 10px;
}
.booking span{
  line-height: 40px;
  margin-left: 90px;
}
}
</style>
