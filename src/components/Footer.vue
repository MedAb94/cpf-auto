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
          <v-col cols="12" sm="12" md="3" lg="3">
            <v-img
                :src="require('../assets/logo.png')"
                max-width="200px"
            />
            <v-icon color="white">mdi-phone</v-icon>
            514-325-4619
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6">
            <v-row>
              <v-col cols="12" lg="8" md="8">
                Address : 10120 Avenue Garon, Montreal Nord QC HIH 3S7
                <div class="mt-8">
                  <v-row v-for="d in days">
                    <v-col cols="4">{{ d[$i18n.locale] }}</v-col>
                    <v-col cols="8">{{ d.hours }}</v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col cols="12" lg="4" md="4">
                <div class="pl-8">
                  {{ $t("footer.links") }}
                </div>
                <div>
                  <v-list  style="background-color: transparent">
                    <v-list-item>
                      <v-list-item-title>
                        <router-link :to="{name:'Home'}">
                          <v-btn text class="white--text">
                            {{ $t('navbar.home') }}
                          </v-btn>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <router-link :to="{name:'About'}">
                          <v-btn text class="white--text">
                            {{ $t('navbar.about') }}
                          </v-btn>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <router-link :to="{name:'Parts'}">
                          <v-btn text class="white--text">
                            {{ $t('navbar.parts') }}
                          </v-btn>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <router-link :to="{name:'Contact'}">
                          <v-btn text class="white--text">
                            {{ $t('navbar.contact') }}
                          </v-btn>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                      <v-list-item-title>
                        <router-link :to="{name:'Login'}">
                          <v-btn text class="white--text">
                            {{ $t('navbar.account') }}
                          </v-btn>
                        </router-link>
                      </v-list-item-title>
                    </v-list-item>

                  </v-list>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="3" lg="3">
            <h3 class="text-center text-md-left">
              {{ $t("footer.delivery") }}
            </h3>
            <div>
              <v-icon color="white" class="mr-5">mdi-facebook</v-icon>
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
      &copy{{ new Date().getFullYear() }} — <strong>Pieces D'auto CPF INC/ All rights reserved</strong>
    </div>
  </v-card>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name: "AppFooter",
  data() {
    return {
      days: [
        {en: "Monday", fr: "Lundi", hours: "8.30am - 6 pm"},
        {en: "Tuesday", fr: "Mardi", hours: "8.30am - 6 pm"},
        {en: "Wednesday", fr: "Mercredi", hours: "8.30am - 6 pm"},
        {en: "Thursday", fr: "Jeudi", hours: "8.30am - 6 pm"},
        {en: "Friday", fr: "Vendredi", hours: "8.30am - 6 pm"},
        {en: "Saturday", fr: "Samedi", hours: "8.30am - 1 pm"},
        {en: "Sunday", fr: "Dimanche", hours: this.$i18n.locale == "en" ? "Closed" : "Fermé"},
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
