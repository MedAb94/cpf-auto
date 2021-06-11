<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height" align="center" justify="stretch">
          <v-col cols="12" class="text-center white--text">
            <h1 class="display-2">
              {{ $t('home.title.1') }} <span class="blue--text">{{ $t('home.title.10') }}</span>
            </h1>
            <h1 class="display-1 my-5"> {{ $t('home.title.2') }}</h1>
            <div>
              <v-btn rounded class="blue white--text px-8" :to="{name: 'Parts'}">{{ $t("home.shopNow") }}</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="light pa-8">
      <v-card class="transparent pa-5" flat rounded>
        <v-row>
          <v-col class="text-center px-3">
            <div class="white fill-height rounded">
              <div>
                <v-icon x-large color="primary" class="mb-5">mdi-truck-check-outline</v-icon>
              </div>
              <div class="px-6">
                <h3>
                  {{ $t("services.1.title") }}
                </h3>
                <p>{{ $t("services.1.desc") }}</p>
              </div>
              <div class="text-center">
                <v-text-field
                    dense flat outlined
                    :label="$t('home.zipcode')"
                    style="max-width: 80%"
                    class="mx-auto"
                >
                  <template slot="append-outer">
                    <v-btn class="primary" flat style="margin-top: -6px">
                     Entrer
                    </v-btn>
                  </template>
                </v-text-field>
                <p class="text-center">
                  {{ $t('home.verifyAddress') }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col class="text-center px-3">
            <div class="white fill-height rounded">
              <div>
                <v-icon x-large color="primary" class="mb-5">mdi-headset</v-icon>
              </div>
              <div class="px-6">
                <h3>
                  {{ $t("services.2.title") }}
                </h3>
                <p>{{ $t("services.2.desc") }}</p>
              </div>
            </div>
          </v-col>
          <v-col class="text-center px-3">
            <div class="white fill-height rounded">
              <div>
                <v-icon x-large color="primary" class="mb-5">mdi-credit-card-settings-outline</v-icon>
              </div>
              <div class="px-6">
                <h3>
                  {{ $t("services.3.title") }}
                </h3>
                <p>{{ $t("services.3.desc") }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <div class="my-5">
        <v-row align="center">
          <v-col cols="12" lg="6" md="6">
            <h3 class="primary--text">
              {{ $t("services.weHave") }}
            </h3>
            <p> {{ $t("services.weHaveText") }}
            </p>
            <div class="text-center">
              <v-btn rounded class="blue white--text px-8 mt-8" :to="{name: 'Parts'}">{{
                  $t("services.viewParts")
                }}
              </v-btn>
            </div>
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
        <h3 class="blue--text">
          {{ $t("brands") }} _______
          <v-icon style="margin-top: 5px">mdi-circle-small</v-icon>
        </h3>
        <v-sheet
            class="mx-auto"
        >
          <v-slide-group
              class="pa-4"
              show-arrows

          >
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/transbec fournisseur.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/Monidex logo.png"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/Alliance_Connect_fournisseur.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/armorall.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/autokool.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/bando.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/Bosal.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/bosch.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/contitech.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/denso.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/fourseasons.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/gates.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/genius.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/kleenflo.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/kugel.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/loop.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/lucasoilproducts.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/Monidex logo.png"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/moog.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/pur.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/rocklandworldparts.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/tor.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/Total.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/transbec fournisseur.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/Unity.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/walkerexhaust.jpg"
                />
              </v-card>
            </v-slide-item>
            <v-slide-item v-slot="{ active, toggle }">
              <v-card
                  class="ma-4"
                  height="100"
                  width="200"
              >
                <v-img
                    src="../assets/img/brands/wix.jpg"
                />
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-container>
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
    imgs: [
      "../assets/img/brands/armorall.jpg",
      "../assets/img/brands/fourseasons.jpg",
      "../assets/img/brands/genius.jpg",
      "../assets/img/brands/moog.jpg",
      "../assets/img/brands/walkerexhaust.jpg",
    ]
  }),

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
