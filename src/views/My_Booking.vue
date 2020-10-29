<template>
    <div class="container-fluid">
        <Navbar :img="getDetailUsers.users.data"  />
        <b-row>
            <b-col lg="12">
                <b-row class="body text-center px-4">
                    <b-col lg="3" class="left-mybooking mx-3 mt-4 mb-4">
                        <b-row class="mt-4">
                            <b-col lg="12">
                                    <img class="avatar rounded-circle" :src="`${URL}/img/${getDetailUsers.users.data[0].image}`" >
                            </b-col>
                            <b-col lg="12" class="mt-4">
                                <b-button to="/user" md variant="outline-primary">Select Photo</b-button>
                            </b-col>
                            <b-col lg="12" class="mt-4 font-weight-bold">
                                <p style="color: #6B6B6B; font-size:16px;"> {{getDetailUsers.users.data[0].name}}</p>
                            </b-col>
                            <b-col lg="12">
                                <p style="color: #6B6B6B; font-size:14px;"> {{getDetailUsers.users.data[0].address}}</p>
                            </b-col>
                            <b-col lg="12" class="mt-3">
                                <b-row>
                                    <b-col lg="5" class="text-left ml-2"><p>Cards</p></b-col>
                                    <b-col lg="6" class="text-right" style="font-size:14px;color:#2395FF;"><p>+Add</p></b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="12">
                                <b-row class="xcard mx-3">
                                    <b-col lg="12">
                                        <p class="text-left mt-2 text-white">{{getDetailUsers.users.data[0].cards}}</p>
                                    </b-col>
                                    <b-col lg="5" class="text-left mb-2" style="color: #AEFAFF;">X Card </b-col>
                                    <b-col lg="5" class="text-right mb-2" style="color: #AEFAFF;">$ 1,440.2</b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="12">
                                <b-row class="mt-4">
                                    <b-col lg="4">
                                        <span class="fa fa-user text-primary"></span>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><router-link to="/user">Profiles</router-link></b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col lg="4">
                                        <span class="fa fa-star"></span>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><h6>My Review</h6></b-col>
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col lg="4">
                                        <span class="fa fa-cogs"></span>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><h6>Setting</h6></b-col>
                                </b-row>
                                <b-row class="my-4">
                                    <b-col lg="4">
                                        <h5><b-icon-power></b-icon-power></h5>
                                    </b-col>
                                    <b-col lg="8" class="text-left"><h6 @click="Logout" style="cursor:pointer">Sign Out</h6></b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col lg="8" class="right-mybooking mx-3 mt-4 mb-4">
                        <b-row>
                            <b-col lg="12" class="right">
                                <b-row>
                                    <b-col lg="12">
                                        <h5 style="color: #2395FF; font-size: 14px; text-align:left;" class="my-3">MY BOOKING</h5>
                                    </b-col>
                                    <b-col lg="6" md="6" sm="6" cols="6" class="mb-2 my-book">
                                        <h4>My Booking</h4>
                                    </b-col>
                                    <b-col lg="6" md="6" sm="6" cols="6" class="mb-2">
                                        <h4 class="history mr-3" style="text-align:right;">Order History</h4>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col lg="12" v-for="(getBooking,index) in getAllBooking.data" :key="index">
                                <b-row class="right mt-4 a">
                                    <b-col lg="10" cols="9">
                                        <p style="text-align:left;color: #000000;" class="mt-3">{{getBooking.departure_day}}</p>
                                    </b-col>
                                    <b-col lg="2" cols="3">
                                              <div>
                                                <b-dropdown  id="dropdown-dropleft" dropleft size="md" variant="link" toggle-class="text-decoration-none" no-caret>
                                                  <template v-slot:button-content>
                                                    <b-icon-three-dots ></b-icon-three-dots>
                                                  </template>
                                                  <b-dropdown-item data-toggle="modal" data-target="#exampleModal" @click="editBooking(index)" >Payment</b-dropdown-item>
                                                  <b-dropdown-item @click="details(getBooking.id_booking)" >View Detail</b-dropdown-item>
                                                </b-dropdown>
                                              </div>
                                    </b-col>
                                    <b-col lg="3" cols="6">
                                       <b-row>
                                           <b-col lg="4" cols="4" ><h3>{{getBooking.code_departure}}</h3></b-col>
                                           <b-col lg="4" cols="4" ><img src="../assets/assets/img/Vector.png" alt=""></b-col>
                                           <b-col lg="4" cols="4" ><h3>{{getBooking.code_destination}}</h3></b-col>
                                       </b-row>
                                    </b-col>
                                    <b-col lg="12" class="text-left code">
                                        <p>{{getBooking.name_airlines}}, {{getBooking.code_airlines}}</p>
                                    </b-col>
                                    <b-col lg="12" class="divider"></b-col>
                                    <b-col lg="12">
                                        <b-row class="mt-3">
                                            <b-col lg="2" md="2" sm="2" cols="6" class="text-left" ><p>Status</p></b-col>
                                            <b-col lg="3" md="5" sm="6" cols="6" v-if="getBooking.status_payment === 1" style="color: #7A7A7A;" >
                                                <p class="waiting text-center" >Waiting for payment</p>
                                            </b-col>
                                            <b-col lg="3" md="5" sm="6" cols="6" v-else-if="getBooking.status_payment === 2" style="color: #7A7A7A;" >
                                                <p class="issued text-center">Eticked Issued</p>
                                            </b-col>
                                            <b-col lg="7" md="5" sm="4" cols="4">
                                                <p class="details mr-3" style="text-align:right; cursor:pointer;" @click="details(getBooking.id_booking)">View Details</p>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <Footer />
        </b-row>
        <Modal  type="editbooking" :detail_booking="detail_booking" @updatePayment="paymentUpdate"/>
    </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import { mapGetters, mapActions, mapState } from 'vuex'
// import Swal from 'sweetalert2'
export default {
  name: 'My-Booking',
  components: {
    Navbar,
    Footer,
    Modal
  },
  data () {
    return {
      URL: process.env.VUE_APP_API_URL,
      id_user: localStorage.getItem('id'),
      detail_booking: [],
      id_airlines: null
    }
  },
  computed: {
    ...mapState({
      id: 'id'
    }),
    ...mapGetters({
      getAllBooking: 'booking/getAllBooking',
      getDetailBooking: 'booking/getDetailBooking',
      getDetailUsers: 'users/getDetailUsers'
    })
  },
  methods: {
    ...mapActions({
      actAllBooking: 'booking/AllBooking',
      actDetailBooking: 'booking/detailBooking',
      updateBooking: 'booking/updateBooking',
      getId: 'users/getDetailUsers'
    }),
    editBooking (index) {
      this.detail_booking = this.getAllBooking.data[index]
      // localStorage.setItem('id_booking', idBooking)
      // this.$router.push({ path: '/EditBooking', query: { idBooking } })
    },
    paymentUpdate (data) {
      this.updateBooking(data)
        .then((result) => {
          if (result.code === 200) {
            alert(result.message)
            setTimeout(() => {
              location.reload(true)
            }, 1000)
          } else {
            alert(result.message)
          }
        }).catch((err) => {
          console.log(err.message)
        })
    },
    details (idBooking) {
      this.actDetailBooking(idBooking)
        .then((result) => {
          alert(result.message)
        }).catch((err) => {
          console.log(err.message)
        })
      this.$router.push({ path: '/DetailBooking', query: { idBooking } })
    },
    Logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('id_transaction')
      localStorage.removeItem('SearchAirlines')
      window.location = '/'
    }
  },
  mounted () {
    this.actAllBooking(this.id_user)
    this.getId(this.id)
  }
}
</script>
<style scoped>
    .body{
        background: #F5F6FA;
    }
    .left-mybooking{
        background: #FFFFFF;
        /* border-radius: 15px; */
    }
    .right{
        background: #FFFFFF;
        border-radius: 15px;
    }
    .my-book{
        font-weight: 600;
        font-size: 24px;
        text-align:left;
        line-height: 36px;
    }
    .code p {
        color: #979797;
        font-size: 14px;
    }
    .divider{
        background: #E6E6E6;
        height: 1px;
    }
    .waiting{
        background: #FF7F23;
        height: 30px;
        border-radius: 3px;
        color: white;
        line-height: 30px;
    }
    .issued{
        background: #4FCF4D;
        border-radius: 3px;
        height: 30px;
        line-height: 30px;
        color: white;
    }
    .details{
        color: #2395FF;
        font-size: 16px;
    }
    .history{
        color: #2395FF;
        font-size: 16px;
    }

    /* Payment */
    .changePay {
      transform: scale(0);
      background-color: aquamarine;
      transition: all 1s;
    }
    .slidePay {
      transform: scale(1);
      position: absolute;
      background-color: aquamarine;
      width: 100px;
    }

    /* profile */
    .avatar{
    width:150px;
    height:160px;
    margin: 6px;
    border:4px solid #1D9BFA;
    border-radius: 500px;
    }
    .xcard{
        background: #2395FF;
        box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
        border-radius: 10px;
    }
    .right-mybooking {
      font-family: sans-serif;
    }
    @media (max-width: 900px){
        .left-mybooking {
            display: none;
        }
        /* .details{
            display:block
        } */
    }
</style>
