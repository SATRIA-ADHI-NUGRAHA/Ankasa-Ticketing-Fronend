<template>
  <div class="container-fluit" style="overflow-x: hidden;">
    <div class="row">
      <div class="col-lg-8">
        <img class="overlay" src="../assets/assets/img/overlay4.png" alt="">
      </div>
      <div class="login col-lg-4">
        <div class="head m-5">
          <img src="../assets/assets/img/blueAirplane.png" alt="">
          <strong class="pl-3">Ankasa</strong>
        </div>
        <div class="back m-5">
          <router-link to="/"><img src="../assets/assets/img/btnback.png" alt=""></router-link>
        </div>
        <div class="m-5">
          <h2 class="textLogin"><strong>Register</strong></h2>
          <form v-on:submit.prevent="onRegister">
            <div class="md-form input-with-post-icon">
              <input type="text" v-model="form.name" id="name" class="form-control" required>
              <label for="name">Full Name </label>
            </div>
            <div class="md-form input-with-post-icon">
              <input type="email" v-model="form.email" id="email" class="form-control" required>
              <label for="email">Email </label>
            </div>
            <div class="md-form input-with-post-icon">
              <i class="fas fa-eye input-prefix"></i>
              <input type="password" v-model="form.password" id="password" class="form-control" required>
              <label for="password">Password </label>
            </div>
            <div>
            <b-button type="submit" class="p-2" block variant="primary"><strong>Sign Up</strong></b-button>
            </div>
          </form>
          <p></p>
          <b-form-checkbox class="pb-4">Accept terms and condition</b-form-checkbox>
          <div>
            <img class="divider" src="../assets/assets/img/divider.png" alt="">
          </div>
          <div class="signIn">
            <h6>Already have an account ?</h6>
          </div>
          <div>
            <router-link to="/login"><b-button class="p-2" block variant="outline-primary"><strong>Sign In</strong></b-button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onRegister () {
      this.actionRegister(this.form).then((response) => {
        alert(response)
        window.location = '/login'
      }).catch((err) => {
        if (err.code === 500) {
          alert(err.message)
        } else {
          alert('Email already exist ...!')
        }
      })
    },
    ...mapActions({
      actionRegister: 'auth/register'
    })
  }
}
</script>

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
  width: 100%;
}
.signIn {
text-align: center;
padding-bottom: 10px;
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
 .signIn {
 padding-bottom: 30px;
 }
}
</style>
