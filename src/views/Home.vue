<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col cols="12" class="text-center white--text">
            <h1 class="display-2">
              We Provide <span class="blue--text">Genuine Parts</span>
            </h1>
            <h1 class="display-1 my-5">At a Competitive Price</h1>
            <div>
              <v-btn rounded class="blue white--text px-8">{{ $t("home.shopNow") }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="light pa-8">
      <v-card class="white pa-5" flat rounded>
        <v-row>
          <v-col class="text-center">
            <div>
              <v-icon x-large color="primary" class="mb-5">mdi-truck-check-outline</v-icon>
            </div>
            <div class="px-6">
              <h3>
                Shpping in Montreal and areas
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, odio.</p>
            </div>
          </v-col>
          <v-col class="text-center">
            <div>
              <v-icon x-large color="primary" class="mb-5">mdi-headset</v-icon>
            </div>
            <div class="px-6">
              <h3>
                Here To Support You
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, odit?</p>
            </div>
          </v-col>
          <v-col class="text-center">
            <div>
              <v-icon x-large color="primary" class="mb-5">mdi-credit-card-settings-outline</v-icon>
            </div>
            <div class="px-6">
              <h3 class="primary--text">
                Payment Secure
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, non.</p>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <div class="my-5">
        <v-row align="center">
          <v-col cols="12" lg="6" md="6">
            <h3 class="primary--text">
              We Have The Part That You Need
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam assumenda deserunt
              ducimus, eaque eligendi ex facilis nam odit porro possimus praesentium quis repellendus reprehenderit sed
              veniam, voluptatem voluptatum!
              <br>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur eius facere itaque libero
              quisquam ratione, reiciendis repellat veniam. Alias error fugiat inventore ipsam nihil recusandae
              voluptas. Fugit, modi, ut. <br>
            </p>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <img src="../assets/img/1.jpg" class="half-bordered" style="width: 100%" alt="">
          </v-col>
        </v-row>
      </div>
    </section>
    <section>
      <!--Brands-->
      <v-container>
        <h3 class="blue--text">Our Brands _______
          <v-icon style="margin-top: 5px">mdi-circle-small</v-icon>
        </h3>
        <v-sheet
            class="mx-auto"
        >
          <v-slide-group
              multiple
              show-arrows
              center-active
          >
            <v-slide-item v-slot="{ active, toggle }">
              <img src="../assets/img/brands/armorall.jpg">
            </v-slide-item>
            <v-slide-item active v-slot="{ active, toggle }">
              <img src="../assets/img/brands/fourseasons.jpg">
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <img src="../assets/img/brands/genius.jpg">
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <img src="../assets/img/brands/moog.jpg">
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <img src="../assets/img/brands/walkerexhaust.jpg">
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <img src="../assets/img/brands/armorall.jpg">
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-container>

    </section>
    <mail-box/>
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </div>

</template>
<script>
import Slider from "../components/Slider";
import MailBox from "../components/MailBox.vue";

export default {
  name: 'Home',
  components: {MailBox, Slider},
  data: () => ({}),

  methods: {},
}
</script>
<style scoped>
.hero {
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../assets/slide/1.jpg') no-repeat center top;
  background-size: cover;
}

.half-bordered {
  border: 8px solid blue;
  border-top: 0;
  border-left: 0;
}
</style>
