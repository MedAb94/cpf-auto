<template>
  <v-card
      flat
      tile
      width="100%"
      color="dark"
  >
    <v-card-text class="white--text font-weight-bold">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" lg="3" sm="12">
            <v-img
                :src="require('../assets/logo.png')"
                max-width="200px"
            />
            <v-icon color="white">mdi-phone</v-icon>
            524-325-4619
          </v-col>
          <v-col cols="12" md="6" lg="6">
            Address : 10120 Avenue Garon, Montreal Nord QC HIH 3S7
            <div class="mt-8">
              <v-row  v-for="d in days">
                <v-col cols="4">{{d.name}}</v-col>
                <v-col cols="8">{{d.hours}}</v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <h3 class="text-center text-md-left">
              Delivery available in Montreal and Areas
            </h3>
            <div>
              <v-icon color="white" class="mr-5">mdi-facebook</v-icon>
              <v-icon color="white" class="mr-5">mdi-instagram</v-icon>
              <v-icon color="white" class="mr-5">mdi-twitter</v-icon>
            </div>
            <v-container>
              <v-row align="center">
                <v-col>
                  <v-img width="60" max-height="50" src="../assets/img/payments/cc.png" alt=""/>
                </v-col>
                <v-col>
                  <v-img width="60" max-height="50" src="../assets/img/payments/mastercard.png" alt=""/>
                </v-col>
                <v-col>
                  <v-img width="80" max-height="50" src="../assets/img/payments/paypal.png" alt=""/>
                </v-col>
              </v-row>
            </v-container>


          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-divider/>

    <div class="white--text text-center">
     &copy{{ new Date().getFullYear() }} — <strong>Pieces D'auto CPF . All rights reserved</strong>
    </div>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "AppFooter",
  data() {
    return {
      days:[
        {name: "Monday", hours: "8.30am - 6 pm"},
        {name: "Tuesday", hours: "8.30am - 6 pm"},
        {name: "Wednesday", hours: "8.30am - 6 pm"},
        {name: "Thursday", hours: "8.30am - 6 pm"},
        {name: "Friday", hours: "8.30am - 6 pm"},
        {name: "Saturday", hours: "8.30am - 6 pm"},
        {name: "Sunday", hours: "Closed"},
      ]
    };
  },
};
</script>
<style lang="scss" scoped>
a {
  color: white !important;
  text-decoration: none;
}
</style>
