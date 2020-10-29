<template>
  <div class="container-fluit" style="overflow-x: hidden;">
    <div class="row">
      <div class="col-lg-8">
        <img class="overlay" src="../assets/assets/img/overlay4.png" alt="">
      </div>
      <div class="login col-lg-4">
        <div class="head m-5">
          <router-link to="/login"><img src="../assets/assets/img/blueAirplane.png" alt=""></router-link>
          <strong class="pl-3">Ankasa</strong>
        </div>
        <div class="back m-5">
          <router-link to="/login"><img src="../assets/assets/img/btnback.png" alt=""></router-link>
        </div>
        <div class="m-5">
          <h2 class="textLogin"><strong>Forgot Password</strong></h2>
          <div class="md-form input-with-post-icon">
            <input type="email" id="suffixInside" class="form-control">
            <label for="suffixInside">Email </label>
          </div>
          <div>
            <b-button class="p-2" block variant="primary"><b>Send</b></b-button>
          </div>
          <p></p>
          <p>You’ll get message soon on your email</p>
        </div>
        <router-link to="/login"><p>Login</p></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
}
.textLogin {
  padding-top: 70px;
  padding-bottom: 30px;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #D2C2FF;
}
.back {
  display: none;
}
.login p {
  text-align: center;
}
.divider {
  width: 77%;
}
.signIn {
text-align: center;
padding-bottom: 35px;
}
.signIn img {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
 .overlay {
  display: none;
 }
 .head {
   display: none;
 }
 .back {
   display: block;
 }
 .divider {
  width: 80%;
 }
 .signIn {
 padding-bottom: 30px;
 }
}
</style>
