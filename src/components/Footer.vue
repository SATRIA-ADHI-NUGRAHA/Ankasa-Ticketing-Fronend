<template>
  <div class="footer">
    <footer>
      <div class="container ">
        <div class="row item-footer ">
          <div class="col-md-3 text-logo">
            <img src="../assets/assets/img/logoangkas.png" alt="logo" /> Ankasa
            <p class="mt-4 text-footer mb-5">
              Find your flight and explore the <br />
              world with us. We take care of the rest
            </p>
          </div>
          <div class="col-md-3 ">
            <h5 class="mb-4">Features</h5>
            <div class="feature">
            <p >Find Ticket</p>
            <p>My Booking</p>
            <p>Chat</p>
            <p>Notification</p>
            </div>
          </div>
          <div class="col-md-3  apk">
            <h5 class="mb-3 download">Download Ankasa app</h5>
            <img
              src="../assets/assets/img/app-store.png"
              alt="app-store"
              class="col-lg-12 col-6 mt-2 app"
            />
            <img
              src="../assets/assets/img/g_play.png"
              alt="g_play"
              class="col-lg-12 col-6 mt-3 g_play"
            />
          </div>
          <div class="col-md-3 ">
            <h5 class="mb-3">Follow Us</h5>
            <div class="social-media">
              <img src="../assets/assets/img/fb2.png" alt="fb" class="mr-3" />
              <img src="../assets/assets/img/twt.png" alt="tw" class="mr-3" />
              <span class="icon-ig">
                <img src="../assets/assets/img/Vector (2).png" class="mr-3" />
                <img src="../assets/assets/img/ig.png" class="dot-ig" />
              </span>
              <span class="icon-yt">
                <img src="../assets/assets/img/Vector (1).png" />
                <img src="../assets/assets/img/Vector.png" class="dot-yt" />
              </span>
            </div>
          </div>
        </div>
        <div class="copy-right mt-5">
          <div class="row mt-4">
            <div class="col-md-6">
              <p>&copy; Ankasa. All Right Reserved</p>
            </div>
            <div class="col-md-6 text-right">
              <b-icon-geo-alt></b-icon-geo-alt> Jakarta Indonesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: white;
  height: 120vh;
}
.item-footer {
  margin-top: 70px;
}
.text-logo {
  font-family: poppinsBold;
  font-weight: 600;
  font-size: 19px;
}
.text-footer {
  font-size: 12px;
  color: rgb(177, 173, 173)
}
.icon-ig {
  position: relative;
}
.dot-ig {
  position: absolute;
  top: 7px;
  left: 6px;
}

.icon-yt {
  position: relative;
}
.dot-yt {
  position: absolute;
  top: 8px;
  left: 8px;
}
.apk img {
  width: 175px;
}
h5 {
  font-family: poppinsNormal;
  font-weight: 600;
  font-size: 16px;
}
.text-right {
  margin-left: -90px;
}

/* Break-point */
@media(max-width:600px) {
  footer {
    height: 100vh;
  }
  .item-footer {
    margin-left: 10px;
  }
  .feature {
    display: flex;
    justify-content: space-between;
  }
  .download {
    margin-top: 20px;
  }
  .apk img.g_play, img.app{
    margin-top: 0 !important;
    width: 250px;
  }
  .apk img {
    margin-left: -15px;
    margin-bottom: 35px;
  }
  .social-media {
    margin-bottom: 20px;
  }
  .copy-right {
    position: relative;
  }
  .copy-right p {
    margin-left: 28px;
  }
  .text-right {
    position: absolute;
    top: -30px;
    left: -160px;
}
}
</style>
