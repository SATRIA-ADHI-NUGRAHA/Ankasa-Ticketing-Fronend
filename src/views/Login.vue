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
          <img src="../assets/assets/img/btnback.png" alt="">
        </div>
        <div class="m-5">
          <h2 class="textLogin"><strong>Login</strong></h2>
          <ValidationObserver v-slot="{ handleSubmit }" >
          <form @submit.prevent="handleSubmit(login)" >
             <div class="md-form input-with-post-icon">
            <ValidationProvider
              name="Email"
              rules="required|email"
              v-slot="{ errors }"
            >
            <input v-model="form.email" type="text" id="suffixInside" class="form-control">
            <label for="suffixInside">Username </label>
            <div class="text-danger">
              {{errors[0]}}
            </div>
            </ValidationProvider>
          </div>
          <p></p>
          <div class="md-form input-with-post-icon">
            <i class="fas fa-eye input-prefix"></i>
            <input type="password" id="suffixInside" class="form-control">
            <ValidationProvider
              name="Password"
              rules="required"
              v-slot="{ errors }"
              >
            <input v-model="form.password" type="password" id="suffixInside" class="form-control">
            <label for="suffixInside">Password </label>
            <div class="text-danger">
              {{errors[0]}}
            </div>
            </ValidationProvider>
          </div>
          <div>
            <b-button type="submit" class="p-2" block variant="primary"><strong>Sign In</strong></b-button>
          </div>
          </form>
      </ValidationObserver>
          <p></p>
          <p>Did you forget your password ?</p>
          <p></p>
          <router-link to="/"><p>Tap here for reset</p></router-link>
        </div>
        <div>
          <img class="divider ml-5" src="../assets/assets/img/divider.png" alt="">
        </div>
        <div class="signIn">
          <h6>or sign in with</h6>
          <b-button class="m-3" variant="outline-primary"><img src="../assets/assets/img/google.png" alt=""></b-button>
          <b-button class="m-3" variant="outline-primary"><img src="../assets/assets/img/fb.png" alt=""></b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      onlogin: 'login'
    }),
    login () {
      this.onlogin(this.form).then(res => {
        setTimeout(() => {
          window.location = '/'
        }, 2000)
        Swal.fire(
          'Good job!',
          `${res}`,
          'success'
        )
      }).catch(err => {
        alert(err)
      })
    }
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
