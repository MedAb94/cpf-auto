<template>
  <div>
    <section class=" pa-3 hero pa-md-10">
      <v-row>
        <v-col cols="12" lg="6" md="8" class="mx-auto">
          <h3 class="text-center mb-8">{{ $t("auth.login") }}</h3>
          <v-text-field :label="$t('auth.email')" outlined filled append-icon="mdi-envelop"></v-text-field>
          <v-text-field :label="$t('auth.password')" outlined filled append-icon="mdi-envelop"></v-text-field>
          <a href="#">{{ $t("auth.forgetPassword") }} ?</a>
          <div>
            <v-btn large block class="primary my-8">{{ $t("auth.login") }}</v-btn>
          </div>
          <div class="my-5">{{ $t("auth.dontHaveAccount") }}?
            <router-link to="/auth/signup" class="font-weight-bold">{{ $t("auth.create") }}</router-link>
          </div>
          <div>
            <v-facebook-login app-id="966242223397117" style="width: 100%"></v-facebook-login>
          </div>
        </v-col>
      </v-row>
    </section>
    <mail-box/>
  </div>
</template>
<script>
import MailBox from "../../components/MailBox.vue";
import VFacebookLogin from 'vue-facebook-login-component'

export default {
  name: 'Home',
  components: {MailBox, VFacebookLogin},
  data: () => ({
    googleSignInParams: {
      client_id: '45214545654.apps.googleusercontent.com'
    }
  }),
  methods: {
    onSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }
  }
}
</script>
<style scoped>
.hero {
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('../../assets/img/login.png') no-repeat center top;
  background-size: cover;
}

.v-text-field--outlined >>> fieldset {
  border-color: black;
}
</style>
