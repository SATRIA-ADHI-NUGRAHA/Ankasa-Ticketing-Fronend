<template>
<div>
  <!-- navbar -->
<div v-if="token === null" >
  <nav class=" fixed-top container hai-manis navbar navbar-expand-lg navbar-light bg-white bg-none mb-5">
    <img style="width: 50px" src="../assets/assets/img/vector 3.png" alt="" srcset="">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse navbar1" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item mr-5">
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control mt-2" placeholder="Search">
        </div>
      </li>
      <li class="nav-item nav-links home ml-2">
        <a class="nav-link " href="javascript:viod()" data-toggle="modal" data-target="#exampleModal"> Find tiket <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item link ml-2">
        <router-link class="nav-link" to="/mybooking">MY booking</router-link>
      </li>
    </ul>
    <a  href="/login" class="btn btn-primary btn-as mr-5 ">sign</a>
  </div>
</nav>
</div>
<div v-else >
    <Navbar :img="getDetailUsers.users.data" />
</div>
<!-- end navbar -->
<!-- main -->
<div  class="main-ctn mt-5">
  <div class="row">
    <div class="col-md-6">
      <div class="container">
        <h1>find your<span class="text-primary"> flight</span></h1>
        <span>and explore the world with us</span>
      </div>
     <div  class="image-down mt-5">
       <img style="width: 100%" src="../assets/assets/img/Group 53.png" alt="">
     </div>
    </div>
    <div  class="col-md-6">
      <div class="image-up mb-5 ">
        <img  style="width: 80%; height: 70%;" class="tayo"  src="../assets/assets/img/Group 55.png" alt="">
      </div>
      <div class="image-roud">
        <img class="tayo2"  src="../assets/assets/img/vector 6.png" alt="">
      </div>
    </div>
  </div>
</div>
<div class="trending container-fluid mt-3" >
  <div>
    <span class="text-primary">trendeing</span>
    <h5>tending destination</h5>
  </div>
  <div>
    <span class="text-primary">view all</span>
  </div>
</div>
<div class="row card-trending mt-4">
  <div class="column">
    <div class="card">
      <img src="../assets/assets/img/card.png" alt="" srcset="">
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="../assets/assets/img/card.png" alt="" srcset="">
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="../assets/assets/img/card.png" alt="" srcset="">
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img style="widows: 100px;" src="../assets/assets/img/card.png" alt="" srcset="">
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img style="widows: 100px;" src="../assets/assets/img/card.png" alt="" srcset="">
    </div>
  </div>
</div>
<div  class="top-destination mt-5">
  <div  class="container tp-dstn">
    <div class="asu">
    <div  class="top-10">
      <p class="font-weight-bold text-white text-center">top 10 destination</p>
    </div>
    <div  class="image-ten">
      <div class="text-center">
        <img class="avatar" src="../assets/assets/img/nnzkZNYWHaU.png" alt="" srcset="">
        <br>
        <span>paris</span>
      </div>
      <div class="text-center">
        <img class="avatar" src="../assets/assets/img/nnzkZNYWHaU.png" alt="" srcset="">
        <br>
        <span>paris</span>
      </div>
      <div class="text-center">
        <img class="avatar" src="../assets/assets/img/nnzkZNYWHaU.png" alt="" srcset=""><br>
        <span>paris</span>
      </div>
      <div class="text-center">
        <img class="avatar" src="../assets/assets/img/nnzkZNYWHaU.png" alt="" srcset="">
        <br>
        <span>paris</span>
      </div>
    </div>
    <div class="image-top">
      <b-button variant="outline-dark">
      <b-icon icon="caret-left" aria-hidden="true"></b-icon>
    </b-button>
     <b-button variant="light">
      <b-icon icon="caret-right"  aria-hidden="true"></b-icon>
    </b-button>
    </div>
    </div>
  </div>
  <Modal type="home"  />
</div>
  <!-- <Footer /> -->
<!-- end of main -->
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
export default {
  components: {
    Modal,
    Navbar
    // Footer
  },
  computed: {
    ...mapState({
      token: 'token',
      id: 'id'
    }),
    ...mapGetters({
      getDetailUsers: 'users/getDetailUsers'
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
/* navbar */
.hai-manis {
  box-shadow: none;
}
.nav-links {
  background-color: white;
  color: red;
}
.prev-btn  {
  height: 7vh;
}
ul:nth-child(odd){
    margin-left: 100px;
}
.btn-as{
    margin-left: 100px;
}
.has-search .form-control {
    padding-left: 2.375rem;
}
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color:
     #aaa;
}
.sign {
  margin-right: 1000px;
}
/* end navbar */
.tayo {
  position: absolute;
  left: 130px;
}
.tayo2 {
  width: 25%;
  position: absolute;
  left: 180px;
  bottom: -20px;
}
.main-ctn {
  padding-top: 90px;
}
.trending {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card-trending {
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: center;
}
.column {
   flex: 0 0 auto;
   padding-left: 20px;
}
.top-destination{
  background: url('../assets/assets/img/Group 388.png');
  background-size: cover;
  background-position: left;
  width: 100%;
  border-radius: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tp-dstn {
  display: flex;
  justify-content: center;
}
.avatar {
    width:80px;
    margin: 6px;
    border:5px solid #fff;
    padding: 6px;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    flex: 0 0 auto;
}
.image-ten {
  display: flex;
 flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
.image-top {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
