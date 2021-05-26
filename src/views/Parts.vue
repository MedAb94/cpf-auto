<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height " align="center" justify="stretch">
          <v-col class="text-center">
            <v-card class="px-8" style="border-radius: 30px">
              <v-row class="ma-0">
                <v-col>
                  <v-select label="Type Year" class="border-r">
                    <v-icon slot="prepend" color="blue">mdi-calendar</v-icon>
                  </v-select>
                </v-col>
                <v-col>
                  <v-select label="Type Make" class="border-r">
                    <v-icon slot="prepend" color="blue">mdi-calendar</v-icon>
                  </v-select>
                </v-col>
                <v-col>
                  <v-select label="Type Model">
                    <v-icon slot="prepend" color="blue">mdi-calendar</v-icon>
                  </v-select>
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
  data: () => ({}),
}
</script>
<style scoped>
.border-r {
  border-right: 5px solid #0088ff;
}

.hero {
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../assets/img/3.jpg') center center no-repeat;
  background-size: contain;
}

</style>
