<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col cols="12" class="text-center white--text">
            <h1 class="display-2 blue--text">
              Get In Touch
            </h1>
            <h1 class="display-1 my-5">And Our Expert Support Team </h1>
            <h1 class="display-1 my-5">Will Answer All Your Questions</h1>
            <div>
              <v-btn rounded class="blue white--text px-8">{{ $t("navbar.contact") }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="contact" class=" pa-3 light pa-md-10">
      <v-row>
        <v-col cols="12" lg="6" md="6">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178790.956034495!2d-73.87038772548914!3d45.558196846619715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2s!4v1621256694570!5m2!1sen!2s"
              width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
          </iframe>
        </v-col>
        <v-col cols="12" lg="6" md="6">
          <v-form class="pa-3 pa-md-10 ">
            <v-text-field background-color="white" :label="$t('contact.name')" placeholder="Enter your name here" outlined/>
            <v-text-field background-color="white" type="email" label="E-Mail" outlined/>
            <v-text-field background-color="white" :label="$t('contact.subject')" outlined/>
            <v-textarea background-color="white" label="Message" outlined/>
            <v-layout justify-center>
              <v-btn class="primary" rounded text width="150">{{ $t('contact.send') }}</v-btn>
            </v-layout>
          </v-form>
        </v-col>
      </v-row>
    </section>
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

}
</script>
<style scoped>
.hero {
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../assets/img/contact.jpg') no-repeat center top;
  background-size: cover;
}

.half-bordered {
  border: 8px solid blue;
  border-top: 0;
  border-left: 0;
  border-radius: 10px;
}
</style>
