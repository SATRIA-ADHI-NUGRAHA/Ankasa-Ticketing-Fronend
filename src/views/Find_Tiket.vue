<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="box d-flex">
        <div class="col-md-6 ml-5">
          <div class="row justify-content-center items ml-5">
            <img src="../assets/assets/img/vector 3 (2).png" class="big-airlines">
            <div class="col-md-1 logo-white">
              <img
                src="../assets/assets/img/vector 02.png"
                alt="Image-ankasa-white"
              />
            </div>
            <div class="col-md-4 col-sm-3 col-3 FROM">
              <p class="from">From</p>
              <h4 class="city ml-3">Medan(IDN)</h4>
            </div>
            <div class="col-md-1 text-white col-sm-3 col-3">
              <b-icon-arrow-left-right></b-icon-arrow-left-right>
            </div>
            <div class="col-md-3 ml-3 col-sm-3 col-3 TO">
              <p class="to">To</p>
              <h4 class="city">Tokyo(JPN)</h4>
              <h4 class="change-search">Change Search</h4>
            </div>
          </div>
          <div class="row  ">
            <div class="schedule">
              <div class="day">Monday, 20 July 20</div>
              <div class="passenger">
                <img src="../assets/assets/img/box.png" alt="" />
                6 Passanger
              </div>
              <div class="class">
                <img src="../assets/assets/img/box.png" alt="" />
                Economy
              </div>
            </div>
          </div>
          <div class="row">
            <div class="list">
              <div class="list-day ">Monday, 20 July 20 <span class="line">|</span> </div>
              <div class="passanger">
                6 Passanger <span class="line">|</span>
              </div>
              <div class="clas-list">
                 Economy
              </div>
            </div>
               <div class="box-search mt-4">
                 <div class="search " style="z-index:1">Change Search</div>
                 <div><img src="../assets/assets/img/btnback.png" alt=""></div>
               </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row content ">
         <div class="col-md-3 mt-5 font-weight-bold filter" style="margin-left:55px; font-size:24px">Filter</div>
         <div class="col-md-1 mt-5 font-weight-bold text-right reset" style="margin-left:-80px; font-size:14px; color:#2395FF;line-height:30px">Reset</div>
         <div class="col-md-3 mt-5 select-ticket" style="margin-left:20px;font-family:poppinsBold;font-weight;600;font-size:22px">Select Ticket <span style="font-family:poppinsNormal;font-size:14px found">({{allfindtiket.findtiket.data.length}} fLight found)</span></div>
         <div class="col-md-5  mt-5 text-right sort" style="margin-left:-80px; font-weight:bold">Sort by
           <b-icon-arrow-down-up></b-icon-arrow-down-up>
         </div>
        <div class="row ml-4 mb-5 desktop-detail">
          <div class="col-md-6 ml-4">
            <div class="list-airlines mt-4">
             <div class="row ml-1 transit">
               <div class="col-md-9 mb-3 font-weight-bold mt-2">Transit</div>
               <div class="col-md">
                 <img src="../assets/assets/img/btnback (1).png" alt="">
               </div>
               <div class="col-md-9 mb-2">Direct</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3" @click="direct('direct')">
               <div class="col-md-9 mb-2" @click="transit('transit')">Transit</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
               <div class="col-md-9 mb-2" @click="transit2('transit')">Transit 2+</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
             </div>
             <hr style="margin: auto 20px;">
              <div class="row ml-1 facilities">
               <div class="col-md-9 mb-3 font-weight-bold mt-2">Facilities</div>
               <div class="col-md">
                 <img src="../assets/assets/img/btnback (1).png" alt="">
               </div>
               <div class="col-md-9 mb-2">Luggage</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3" @click="luggage('luggage')">
               <div class="col-md-9 mb-2">In-Flight Meal</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3" @click="meal('Meal')">
               <div class="col-md-9 mb-2">Wi-fi</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3" @click="wifi('Wi-fi')">
             </div>
             <hr style="margin: auto 20px;">
              <div class="row ml-1 departure">
               <div class="col-md-9 mb-3 font-weight-bold mt-2">Departure Time</div>
               <div class="col-md">
                 <img src="../assets/assets/img/btnback (1).png" alt="">
               </div>
               <div class="col-md-9 mb-2">00:00 - 06:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
               <div class="col-md-9 mb-2">00:60 - 12:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
               <div class="col-md-9 mb-2">12:00 - 18:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
               <div class="col-md-9 mb-2">18:00 - 24:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
             </div>
             <hr style="margin: auto 20px;">
              <div class="row ml-1 time_arrived">
               <div class="col-md-9 mb-3 font-weight-bold mt-2">Time Arrived</div>
               <div class="col-md">
                 <img src="../assets/assets/img/btnback (1).png" alt="">
               </div>
               <div class="col-md-9 mb-2">00:00 - 06:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
               <div class="col-md-9 mb-2">00:60 - 12:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
               <div class="col-md-9 mb-2">12:00 - 18:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
               <div class="col-md-9 mb-2">18:00 - 24:00</div>
               <input type="checkbox" aria-label="Checkbox for following text input" class="ml-3">
             </div>
             <hr style="margin: auto 20px;">
             <div class="row tiket-price mt-4 ml-2">
               <div class="col-md-6">
                 <!-- Tiket -->
                 <h4>Ticket Price</h4>
               </div>
               <div class="col-md-6 text-right" style="margin-left:-55px">
                 <img src="../assets/assets/img/btnback (1).png" alt="">
               </div>
             </div>
              <div class="text-slider mt-4 ml-4 ">
                <div>Lowest</div>
                <div>Highest</div>
              </div>
              <div class="row">
                <div class="slider">
                  <img src="../assets/assets/img/Line 11.png"  class="ml-5 mb-5 ">
                  <img src="../assets/assets/img/Line 13.png" class="slider2">
                  <img src="../assets/assets/img/Ellipse 19.png" class="dot1">
                  <img src="../assets/assets/img/Ellipse 19.png" class="dot2">
                </div>
              </div>
              <div class="ticket-price ml-4 ">
                <div>$ 145,00</div>
                <div>$ 300,00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg mt-4">
              <div class="box-ticket mb-3" v-for="(datafindtiket, index) in allfindtiket.findtiket.data" :key="index">
                    <div class="row airlines">
                      <div class="col-lg-2">
                        <img :src="`http://localhost:3000/img/${datafindtiket.image_airlines}`" alt="">
                      </div>
                      <div class="col-lg-8">{{datafindtiket.name_airlines}}</div>
                    </div>
                      <div class="row airlines-detail ml-2">
                        <div class="col-lg-1  font-weight-bold">{{datafindtiket.code_departure}}</div>
                        <p style="font-size:10px" class="text-muted time">12:33</p>
                        <div class="col-lg-1 ml-4"><img src="../assets/assets/img/Vector (3).png" alt=""></div>
                        <div class="col-lg JPN">{{datafindtiket.code_destination}}</div>
                        <p style="font-size:10px" class="text-muted time2">12:33</p>
                        <div class="col-lg-2 text-time" style="width:40px">3 hours 11 minutes <br> <span style="padding-left:20px">1 {{datafindtiket.name_transit}}</span></div>
                        <div class="col-lg text-center d-d-inline">
                          <span v-if="datafindtiket.name_facilities==='Luggage'">
                          <img src="../assets/assets/img/bag.png" alt="bag" class="mr-2" width="15px">
                          </span>
                            <span :else-if="datafindtiket.name_facilities==='Wi-fi'">
                          <img src="../assets/assets/img/wifi.png" alt="meal" class="mr-2" width="15px">
                          </span>
                            <span :else-if="datafindtiket.name_facilities==='In-Flight Meal'">
                          <img src="../assets/assets/img/meal.png" alt="meal" class="mr-2" width="15px">
                          </span>
                        </div>
                        <div class="col-lg price text-center">$ {{datafindtiket.price}}<span>/pax</span></div>
                        <div class="col-lg ">
                          <div class="select">
                            <router-link :to="`/flightdetail/${datafindtiket.id_airlines}`" class="selects" style="box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);height:40px;width:100px">Select</router-link>
                          </div>
                        </div>
                      </div>
                        <div class="row">
                          <a href="" class="view-detail">View Detail</a>
                          <img src="../assets/assets/img/btnback (2).png" style="margin-left:10px;margin-top:5px" width="15px;" height="12px">
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
  name: 'Find_Tiket',
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      allfindtiket: 'findtiket/getAllTiket'
    })
  },
  methods: {
    ...mapActions({
      actionsFindTiket: 'findtiket/getAllTicket',
      actionsGetDetailTiket: 'findtiket/getDetailTicket',
      actionsFilterTiketTransit: 'findtiket/filterTiketTransit',
      actionsFilterTiketFacilities: 'findtiket/filterTiketFacilities'
    }),
    direct (value) {
      this.actionsFilterTiketTransit(value)
    },
    transit (value) {
      this.actionsFilterTiketTransit(value)
    },
    transit2 (value) {
      this.actionsFilterTiketTransit(value)
    },
    luggage (value) {
      this.actionsFilterTiketFacilities(value)
    },
    meal (value) {
      this.actionsFilterTiketFacilities(value)
    },
    wifi (value) {
      this.actionsFilterTiketFacilities(value)
    }
    // selectTiket (idAirlines) {
    //   this.actionsGetDetailTiket(idAirlines)
    // }
  },
  mounted () {
    this.actionsFindTiket()
  }
}
</script>

<style scoped>
.big-airlines {
  position: absolute;
  top: -90px;
  left: -60px;
  width: 250px;
}
.box-ticket2 {
  display: none;
}
.list, .box-search {
  display: none !important;
}
.items {
  position: relative;
}
.box {
  width: 100%;
  height: 216px;
  background-color: #2395FF;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.items {
  margin-top: 100px;
  /* margin: auto 20px; */
}
.city {
  font-family: poppinsNormal;
  font-weight: 300;
  color: white;
}
.time {
  position: absolute;
  bottom: 10px;
  left: 52px;
}
.time2 {
  position: absolute;
  bottom: 10px;
  left: 25%;
}
.text-white {
  font-size: 20px;
  font-weight: bold;
}
.from {
  position: absolute;
  top: -25px;
  left: 30px;
  color: white;
  opacity: 0.7;
  font-size: 12px;
}
.change-search {
  position: absolute;
  top: 5px;
  right: -600px;
  font-family: poppinsNormal;
  font-weight: 300;
  color: white;
  font-size: 16px;
}
.to {
  position: absolute;
  top: -25px;
  left: 120px;
  color: white;
  opacity: 0.7;
  font-size: 12px;
}
.schedule {
  justify-content: space-between;
  display: flex;
  width: 380px;
  position: absolute;
  top: 140px;
  left: 220px;
  font-size: 12px;
  color: white;
  opacity: 0.8;
}
.content {
    background-color: #F5F6FA;
}
.list-airlines {
  width: 380px;
  background-color: #FFFFFF;
  border-radius: 15px;
}
.list-airlines .transit,.facilities,.departure,.time_arrived {
  padding: 10px;
}
.airlines,.airlines-detail{
  padding: 30px;
}
.airlines-detail {
  position: relative;
  font-family: poppinsBold;
  font-weight: 600;
  font-size: 24px;
  margin-top: -30px;
}
.text-time,.price {
  font-size: 11px;
  font-family: poppinsNormal;
}
.price {
  color: #2395FF;
  line-height: 40px;
}
.price span {
  color: rgb(112, 119, 117);
}
.airlines img {
  margin-left: 20px;
}
.select .selects {
  background: #2395FF;
box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
border-radius: 10px;
color: white;
  width: 100px;
height: 40px;
cursor: pointer;
}
.select .selects{
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}

.box-ticket {
  width: 96%;
  background-color: #FFFFFF;
  border-radius: 15px;
  overflow: hidden;
}
.view-detail {
  color:#2395FF;
  font-size:14px;
  margin-left:60px;
  margin-bottom:10px;
  font-family: poppinsBold;
  font-weight: 600;
}
.tiket-price h4 {
  font-size: 14px;
  font-family: poppinsBold;
  font-weight: 600px;
}
.text-slider {
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  font-size: 12px;
}
.ticket-price {
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  font-size: 12px;
  color: #2395FF;
  font-weight: bold;
}
.slider {
  position: relative;
}
.slider2 {
  position: absolute;
  left: 90px;
  top: 0;
}
.dot1 {
  position: absolute;
  left: 90px;
  top: -10px;
}
.dot2 {
  position: absolute;
  left: 155px;
  top: -10px;
}
/* Break-Point */
@media(max-width:600px) {
  .select-ticket {
  display: none;
}
  .box {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .logo-white {
    display: none;
  }
  .big-airlines {
  position: absolute;
  top: -80px;
  left: -90px;
}
  .box {
    position: relative;
  }
  .FROM {
    position: absolute;
    top: -50px;
    left: -90px;
}
  .TO {
    position: absolute;
    top: -50px;
    left: 225px;
}
.to {
  margin-left: -15px;
}
.FROM h4, .TO h4 {
    font-size: 20px;

}
  .text-white {
    position: absolute;
    top: -53px;
  }
  .schedule {
    display: none;
  }
  .list {
  display: block !important;
  margin-bottom: 200px;
}
.list {
  display: flex !important;
  width: 380px;
  position: absolute;
  top: 100px;
  left: 8px;
  font-size: 12px;
  color: white;
  opacity: 0.8;
}
span.line {
  margin-left: 16px;
  margin-right: 16px;
}
.box-search {
  width: 100%;
  padding: 20px;
  justify-content: space-between;
  display: flex !important;
  flex-direction: row;
  color: white;
  margin-left: -10px;
}
.desktop-detail, .list-airlines, .filter,.reset,.select,.sort,.box-ticket {
  display: none;
}
.content {
  background-color: #FFF;
}
.box-ticket2 {
  display: block;
  width: 100%;
  background-color: #FFF;
 margin-bottom: 100px;
 margin-top: -25px;
 overflow-x: hidden;
}
.card1 {
  display: flex;
  justify-content: space-between;
  margin: 35px;
}
.filter-mobile {
  font-family: poppinsBold;
  font-weight: 300;
}
.card2{
width: 470px;
 background-color: #FFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 7.5px;
padding: 20px;
margin: 30px;
}
.name-airline-mobile{
  margin-left: 90px;
  font-size: 24px;
  font-family: poppinBold;
  font-weight: 600;
  margin-top: -10px;
}
.card-airlines {
  position: relative;
}
.country-mobile {
  font-size: 22px;
  font-family: poppinsBold;
  font-weight: 600;
}
.vektor {
  position: absolute;
  top: 10px;
  left: 125px;
}
.time-mobile {
  font-size: 13px;
}
.long-time div:nth-child(1) {
  font-size: 15px;
  font-weight: normal;
}
.long-time div:nth-child(2) {
  color: #2395FF;
  font-weight: bold;
}
}
</style>
