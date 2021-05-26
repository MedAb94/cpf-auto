<template>
  <div>
    <slider></slider>
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
  data: () => ({
    fab: false,
    model: 0,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre nom' : 'Name is required',
    ],
    email: '',
    emailRules: [
      v => !!v || this.$i18n.locale === 'fr' ? 'Veillez saisir votre couriel' : 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail Invalide',
    ],
    select: null,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    }

  },
}
</script>
<style scoped>
.home {
}

.half-bordered {
  border: 8px solid blue;
  border-top: 0;
  border-left: 0;
  border-radius: 10px;
}
</style>
