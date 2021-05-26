<template>
  <v-card
      flat
      tile
      width="100%"
      class="text-center"
      color="dark"
  >
    <v-card-text class="white--text font-weight-bold">
      <v-row align="center">
        <v-col cols="12" md="4" sm="12">
          <v-img
              :src="require('../assets/logo.png')"
              class="mx-auto mb-0"
              max-width="200px"
          />
          <p>
            <v-icon color="white">mdi-phone</v-icon>
            524-325-4619
          </p>
        </v-col>
        <v-col cols="12" md="4">
          Address : 10120 Avenue Garon, Montreal Nord QC HIH 3S7
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-center text-md-left">
            Delivery available in Montreal and Areas
          </h3>
          <v-row class="text-left">
            <v-col cols="4">
              <v-icon color="white" class="mr-5">mdi-facebook</v-icon>
            </v-col>
            <v-col cols="4">
              <v-icon color="white" class="mr-5">mdi-instagram</v-icon>
            </v-col>
            <v-col cols="4">
              <v-icon color="white" class="mr-5">mdi-twitter</v-icon>
            </v-col>

          </v-row>
          <v-row class="text-left">
            <v-col cols="4">
              <img width="100" height="50" src="../assets/img/payments/favpng_credit-card-payment-debit-card-emv-mastercard.png" alt="">
            </v-col>
            <v-col cols="4">
              <img width="100" height="50" src="../assets/img/payments/favpng_mastercard-credit-card.png" alt="">
            </v-col>
            <v-col cols="4">
              <img width="100" height="50" src="../assets/img/payments/favpng_shantae-half-genie-hero-paypal-e-commerce-payment-system-credit-card.png" alt="">
            </v-col>

          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider/>

    <div class="white--text text-center">
      @{{ new Date().getFullYear() }} — <strong>&copy All rights reserved</strong>
    </div>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "AppFooter",
  data() {
    return {};
  },
  computed: mapGetters(["lang"]),
};
</script>
<style lang="scss" scoped>
a {
  color: white !important;
  text-decoration: none;
}
</style>
