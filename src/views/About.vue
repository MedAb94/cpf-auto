<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col class="text-center white--text">
            <h1 class="display-2">
              {{ $t("about.hero") }}
            </h1>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="light">
      <v-container>
        <v-row align="center ">
          <v-col cols="12" lg="6" md="6" class="pa-5">
            <img src="../assets/img/about/2.jpg" style="width: 100%" alt="">
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <p>{{ $t("about.1") }}</p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-container class="my-5">
      <v-row align="center">
        <v-col cols="12" lg="6" md="6">
          <p>{{ $t("about.2") }}</p>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <img src="../assets/img/about/1.jpg" style="width: 100%" alt="">
        </v-col>
      </v-row>
    </v-container>

    <mail-box/>
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
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
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
.hero {
  height: 45vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../assets/img/about.jpg') no-repeat center center;
  background-size: contain;
}

.half-bordered {
  border: 8px solid blue;
  border-top: 0;
  border-left: 0;
  border-radius: 10px;
}
</style>
