<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container mt-3">
      <Modal type="home" />
      <Modal type="departure_time" />
      <a class="navbar-brand" href="/"><img src="../assets/assets/img/logoangkas.png" class="logo"> Ankasa</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <!-- <div class="search">
            <input type="text" class=" search" placeholder=" Where you want to go ?">sad
            </div> -->
            <b-input-group size="sm" class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-prepend>
                <b-form-input type="search" class="search" placeholder="Search terms"></b-form-input>
            </b-input-group>
            <!-- <div class="search">
            </div> -->
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
          </li>
          <li class="nav-item ml-4">
            <a class="nav-link" href="#"  data-toggle="modal" data-target="#search">Find Ticket</a>
          </li>
          <li class="nav-item ml-4">
            <router-link to="/mybooking" class="nav-link" > My Booking</router-link>
          </li>
          <li class="nav-item ml-4">
            <a class="nav-link" href="#"  data-toggle="modal" data-target="#see-departure"> <b-icon-calendar-date-fill></b-icon-calendar-date-fill></a>
          </li>
        </ul>
        <ul class="navbar-nav phone desktop">
           <li class="nav-item mr-5 enpelove">
          <img src="../assets/assets/img/dot (1).png" class="dot1">
            <a href="#">
              <b-icon-envelope></b-icon-envelope>
            </a>
          </li>
          <li class="nav-item mr-5 bell">
          <img src="../assets/assets/img/dot (1).png" class="dot2">
            <a href="#">
              <b-icon-bell></b-icon-bell>
            </a>
          </li>
          <li>
            <div v-if="img[0].image !== 'default.jpg'">
              <b-dropdown size=sm  variant="link" toggle-class="text-decoration-none" no-caret>
                <template v-slot:button-content>
                   <img class="image-me rounded-circle profile" :src="`${url}/img/${img[0].image}`" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="cursor:pointer;width:36px;height:36px ">
                </template>
                <b-dropdown-item href="/user"><b-icon-person></b-icon-person> Profile</b-dropdown-item>
                <b-dropdown-item @click="logout"> <b-icon-power></b-icon-power> Logout</b-dropdown-item>
              </b-dropdown>
            </div>
            <div v-else>
              <b-dropdown size=sm  variant="link" toggle-class="text-decoration-none" no-caret>
                <template v-slot:button-content>
                   <img class="image-me rounded-circle profile" src="https://digicourse.id/assets.digicourse.id/user/profile_picture/default_user.jpg" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="cursor:pointer;width:36px;height:36px ">
                </template>
                <b-dropdown-item href="/user"><b-icon-person></b-icon-person> Profile</b-dropdown-item>
                <b-dropdown-item @click="logout"> <b-icon-power></b-icon-power> Logout</b-dropdown-item>
              </b-dropdown>
            </div>
          </li>
        </ul>
       </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import Modal from './Modal'
export default {
  name: 'Navbar',
  props: ['img'],
  components: {
    Modal
  },
  data () {
    return {
      url: process.env.VUE_APP_API_URL
    }
  },
  computed: {
    ...mapState({
      detailUser: 'users'
    })
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      localStorage.removeItem('id_transaction')
      localStorage.removeItem('SearchAirlines')
      window.location = '/'
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  transition: all 1s;
}
/* Search */
  .search {
    background-color: #F5F5F5;
    border-radius: 10px;
    width: 250px;
    height: 40px;
  }
  .image-me {
      max-width: 100%;
      height: auto;
  }
  /* Font */
  .navbar-brand,.nav-item {
    font-family: poppinsBold;
    font-weight: 700;
  }
  /* Nav-Link */
  .nav-link:hover::after {
  content: '';
  display: block;
  border-bottom: 3px solid #2395FF;
  width: 50%;
  margin: auto;
  padding-bottom: 3px;
  margin-bottom: -8px;
  transition: width 2s;
  }
  .enpelove,.bell {
    position: relative;
  }
  .dot2 {
    position: absolute;
    top: 1px;
    left: 5px;
  }
  .dot1 {
    position: absolute;
    top: 1px;
    left: 8px;
  }
.desktop {
  display: flex;
  align-items: center;
}
.profile {
  /* margin-left: -10px; */
}
/* Break-Point */
@media(max-width:600px) {
  .navbar-brand {
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .phone {
    display: block;
    margin-left: 20px;
    margin-top: 10px;
  }
 .bell {
    margin-top: -24px;
    margin-left: 50px;
  }
  .profile {
    margin-top: -70px;
    margin-left: 60px;
  }
  /* Nav-Link */
  .nav-link:hover::after {
  content: '';
  display: inline;
  border-bottom: 3px solid #2395FF;
  }
   .logout {
    margin-top: 60px;
    margin-left: -10px;
  }
}
</style>
