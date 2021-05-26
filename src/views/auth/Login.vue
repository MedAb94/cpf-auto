<template>
  <div>
    <section class=" pa-3 light pa-md-10">
      <v-row>
        <v-col cols="12" lg="6" md="8" class="mx-auto">
          <h3 class="text-center mb-8">USER LOGIN</h3>
          <v-text-field label="Email" background-color="white" filled append-icon="mdi-envelop"></v-text-field>
          <v-text-field label="Password" background-color="white" filled append-icon="mdi-envelop"></v-text-field>
          <a href="#">Forgot Password</a>
          <div>
            <v-btn large block class="primary my-8">Sign in</v-btn>
          </div>
          <div class="mt-5">
            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"
                         :onFailure="onFailure"></GoogleLogin>
          </div>
        </v-col>
      </v-row>
    </section>
    <mail-box/>
  </div>
</template>
<script>
import MailBox from "../../components/MailBox.vue";

export default {
  name: 'Home',
  components: {MailBox},
  data: () => ({
    params: {
      client_id: "xxxxxx"
    },
    // only needed if you want to render the button with the google ui
    renderParams: {
      width: 250,
      height: 50,
      longtitle: true
    },
    fab: false,
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
    onSuccess(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
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

.hero {
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../../assets/img/3.jpg') center center no-repeat;
  background-size: contain;
}
</style>
