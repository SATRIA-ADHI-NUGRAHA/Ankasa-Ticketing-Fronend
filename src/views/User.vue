<template>
    <div class="wrap-content"> <nav  class=" fixed-top container-fluid navbar navbar-expand-lg navbar-light bg-warning bg-white mb-5">
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
      <li class="nav-item active home ml-2">
        <a class="nav-link" href="javascript:viod()" data-toggle="modal" data-target="#exampleModal"> Find tiket <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item link ml-2">
        <a class="nav-link" href="#">MY booking</a>
      </li>
    </ul>
    <button class="btn btn-primary btn-as mr-5 ">sign</button>
  </div>
</nav>
    <div class="container-fluid content pl-5 pr-5">
       <div class="" style=" display: flex; justify-content: space-around; height: 100vh">
           <div  class="col-md-3 bg-white">
               <div class="text-center mt-5">
                 <img class="avatar" src="../assets/assets/img/me.png" alt="" srcset="">
               </div>
               <div class="text-center mt-3" >
                   <button type="button" class="btn btn-outline-primary">Select Photo</button>
               </div>
               <div class="text-center mt-3">
                   <h5 class="font-weight-bold">farhan ammar</h5>
                   <span >Tegal,Indonesia</span>
               </div>
               <div class="card-info mt-3">
                   <span class="font-weight-bold">cards</span>
                   <span class="text-primary">+ add</span>
               </div>
               <div class="mt-3 card-wraper">
                   <span>4441 1235 5512 5551</span>
                   <div class="card-saldo">
                       <p>x-card</p>
                       <p>$ 1,440.2</p>
                   </div>
               </div>
               <div  class="user-seting mt-3">
                   <div class="">
                       <span class="fa fa-user text-primary"></span>
                       <span  class="ml-3 text-primary font-weight-bold">profile</span>
                   </div>
                   <div class="mt-2">
                      <span class="fa fa-star"></span>
                       <span  class="ml-3 font-weight-bold">my riview</span>
                   </div>
                   <div class="mt-2">
                       <span     class="fa fa-cogs"></span>
                       <span  class="ml-3 font-weight-bold">settings</span>
                   </div>
                   <div class="mt-2">
                      <span class="fa fa-sign-out text-danger"></span>
                       <span  class="ml-3 text-danger font-weight-bold">user</span>
                   </div>
               </div>
           </div>
           <div class="col-md-9 info-user  bg-white ml-5 ">
               <h5 class="text-primary">profile</h5>
               <h3 class="font-weight-bold">profile</h3>
               <div class="row">
                   <div class="col-md-6 mt-3">
                      <h5 class="font-weight-bold">contact</h5>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">email</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">phone number</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="acount-set">
                        <h5 class="text-primary">acount seting  <b-icon icon="caret-right"  aria-hidden="true"></b-icon></h5>
                    </div>
                   </div>
                   <div class="col-md-6">
                       <h5 class="font-weight-bold">biodata</h5>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">username</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                        <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                        <div class="form-group">
                        <label for="exampleFormControlInput1">City</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                        <div class="form-group">
                        <label for="exampleFormControlInput1">Post Code</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                   </div>
               </div>
           </div>
       </div>
    </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      allUsers: 'users/getAllusers'
    })
  },
  methods: {
    ...mapActions({
      actionsAllUsers: 'users/getAllUsers'
    })
  },
  mounted () {
    this.actionsAllUsers()
  }
}
</script>

<style scoped>
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
   padding-top: 100px;
}
.avatar {
     width:70px;
    margin: 6px;
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
</style>
