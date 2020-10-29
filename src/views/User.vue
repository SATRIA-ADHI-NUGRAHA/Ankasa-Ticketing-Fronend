<template>
    <div class="wrap-content">
        <Navbar :img="getDetailUsers.users.data" />
    <div class="container-fluid content pl-5 pr-5">
       <div class="" style=" display: flex; justify-content: space-around; height: 100vh">
           <div  class="col-md-3 bg-white">
               <div class="text-center mt-5">
                 <img class="avatar" :src="`${url}/img/${detailUser.detail.image}`" alt="" srcset="">
               </div>
               <div class="text-center mt-3" >
                    <b-button md variant="outline-primary" class="fileContainer">Select Photo
                      <input  @change="uploadfile" type="file"/>
                    </b-button>
               </div>
               <div class="text-center mt-3">
                   <h5 class="font-weight-bold">{{ detailUser.detail.name }}</h5>
                   <span >{{ detailUser.detail.city }}</span>
               </div>
               <div class="card-info mt-3">
                   <span class="font-weight-bold">cards</span>
                   <span class="text-primary">+ add</span>
               </div>
               <div class="mt-3 card-wraper p-2">
                   <span>{{detailUser.detail.cards}}</span>
                   <div class="card-saldo">
                       <p>x-card</p>
                       <p>$ 1,440.2</p>
                   </div>
               </div>
               <div  class="mt-4 ml-4" style="cursor:pointer">
                     <div class="mt-2 mb-4 d-flex font-weight-bold">
                      <h5 ><b-icon-person ></b-icon-person></h5>
                      <h6 class="font-weight-bold ml-4">Profile</h6>
                   </div>
                     <div class="mt-2 mb-4 d-flex font-weight-bold">
                      <h5 ><b-icon-star ></b-icon-star></h5>
                      <h6 class="font-weight-bold ml-4">My Review</h6>
                   </div>
                   <div class="mt-2 mb-4 d-flex font-weight-bold">
                      <h5 ><b-icon-gear ></b-icon-gear></h5>
                      <h6 class="font-weight-bold ml-4">Setting</h6>
                   </div>
                   <div class="mt-2 mb-4 d-flex font-weight-bold">
                      <h5 ><b-icon-power ></b-icon-power></h5>
                      <h6 class="font-weight-bold ml-4" @click="Logout">Power</h6>
                   </div>
               </div>
           </div>
           <div class="col-md-9 info-user  bg-white ml-5 ">
               <h5 class="text-primary mt-2">PROFILE</h5>
               <h3 class="font-weight-bold">ProfileE</h3>
            <form @submit.prevent="update">
               <div class="row">
                   <div class="col-md-6 mt-3">
                      <h5 class="font-weight-bold">Contact</h5>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">email</label>
                        <input type="text" name="email" readonly :value="detailUser.detail.email" class="form-control" id="exampleFormControlInput1" placeholder="email">
                    </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">phone number</label>
                        <input type="text"  v-model="detailUser.detail.phone_number"  required class="form-control" id="exampleFormControlInput1" placeholder="phone number">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Cards</label>
                        <input type="number"  v-model="detailUser.detail.cards" class="form-control" required id="exampleFormControlInput1" placeholder="Cards">
                    </div>
                    <div class="acount-set">
                        <h5 class="text-primary">acount seting  <b-icon icon="caret-right"  aria-hidden="true"></b-icon></h5>
                    </div>
                   </div>
                   <div class="col-md-6">
                       <h5 class="font-weight-bold">Biodata</h5>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">username</label>
                        <input type="text" v-model="detailUser.detail.name" class="form-control"  required id="exampleFormControlInput1" placeholder="username">
                    </div>
                        <div class="form-group">
                        <label for="exampleFormControlInput1">city</label>
                        <input type="text"  v-model="detailUser.detail.city" class="form-control"  required id="exampleFormControlInput1" placeholder="email">
                    </div>
                        <div class="form-group">
                        <label for="exampleFormControlInput1">address</label>
                        <input type="text" class="form-control"  v-model="detailUser.detail.address" required id="exampleFormControlInput1" placeholder="city">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Post Code</label>
                        <input type="text"  v-model="detailUser.detail.post_code" required class="form-control" value="55211" id="exampleFormControlInput1" placeholder="post code">
                    </div>
                    <div class="btn-save">
                        <button type="submit" class="btn btn-primary btn-md">Save</button>
                    </div>
                   </div>
               </div>
            </form>
           </div>
       </div>
    </div>

    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Navbar from '../components/Navbar'
import Swal from 'sweetalert2'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      url: process.env.VUE_APP_API_URL,
      form: {
        email: '',
        phone: '',
        biodata: '',
        city: '',
        Address: '',
        post: '',
        cards: '',
        files: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      allUsers: 'users/getAllusers',
      getDetailUsers: 'users/getDetailUsers'
    }),
    ...mapState({
      detailUser: 'users',
      id: 'id'
    })
  },
  methods: {
    ...mapActions({
      actionsAllUsers: 'users/getAllUsers',
      detail: 'users/getDetail',
      updateuser: 'users/updateuser',
      getId: 'users/getDetailUsers'
    }),
    uploadfile: function (e) {
      this.form.files = e.target.files[0]
    },
    update () {
      const formdata = new FormData()
      formdata.append('image', this.form.files)
      formdata.append('name', this.detailUser.detail.name)
      formdata.append('email', this.detailUser.detail.email)
      formdata.append('city', this.detailUser.detail.city)
      formdata.append('address', this.detailUser.detail.address)
      formdata.append('phone_number', this.detailUser.detail.phone_number)
      formdata.append('post_code', this.detailUser.detail.post_code)
      formdata.append('cards', this.detailUser.detail.cards)
      this.updateuser(formdata).then(dt => {
        setTimeout(() => {
          window.location = '/user'
        }, 2000)
        Swal.fire(
          'Good job!',
          `${dt}`,
          'success'
        )
      }).catch(err => {
        console.log(err.message)
      })
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
    this.actionsAllUsers()
    this.detail()
    this.getId(this.id)
  }
}
</script>

<style scoped>
.btn-save {
    display: flex;
    justify-content: flex-end;
}
.wrap-content {
    background-color: #F0F1F5;
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
.content {
   padding-top: 30px;
}
.avatar {
     width: 50%;
    border:5px solid #1D9BFA;
    padding: 7px;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
}
.card-info {
    display: flex;
    justify-content: space-between;
}
.card-saldo {
    display: flex;
    justify-content: space-between;
}
.card-wraper {
    background: #2395FF;
box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
border-radius: 10px;
}
.user-seting {
    padding: 20px;
    cursor: pointer;
}
input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
}
.info-users {
    position: absolute;
    height: 100vh;
    top: 21px;
    right: -0px;
}
.acount-set {
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
    font-size: 10px;
    cursor: pointer;
}
.fileContainer {
    overflow: hidden;
    position: relative;
}

.fileContainer [type=file] {
    cursor: inherit;
    display: block;
    filter: alpha(opacity=0);
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}

/* Example stylistic flourishes */

.fileContainer {
    background: rgb(241, 241, 245);
    border-radius: .5em;
    padding: .5em;
}

.fileContainer [type=file] {
    cursor: pointer;
}
</style>
