<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height " align="center" justify="stretch">
          <v-col class="text-center">
            <v-card rounded>
              <v-row>
                <v-col>
                  <v-select prepend-icon="mdi-calendar" label="Type Year"></v-select>
                </v-col>
                <v-col>
                  <v-select prepend-icon="mdi-calendar" label="Type Make"></v-select>
                </v-col>
                <v-col>
                  <v-select prepend-icon="mdi-calendar" label="Type Model"></v-select>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


    </section>
    <section class=" pa-3 light pa-md-10">
      <h3>Select a category</h3>
      <v-row align="center" justify="stretch">
        <v-col cols="12" lg="3" md="4" v-for="n in 8">
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                src="../assets/img/4.jpg"
                height="200px"
            />

            <v-card-title class="primary white--text text-center">
              Top western road trips
            </v-card-title>

          </v-card>
        </v-col>
      </v-row>
    </section>
    <mail-box/>
  </div>

</template>
<script>
import MailBox from "../components/MailBox.vue";

export default {
  name: 'Home',
  components: {MailBox},
  data: () => ({
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
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/img/3.jpg') center center no-repeat;
  background-size: contain;
}
</style>
