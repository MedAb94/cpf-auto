<template>
  <v-container>
    <v-card>
      <v-card-title class="red">{{ $route.params.categ_name }}</v-card-title>
      <v-card-text>
        <v-row class="my-3">
          <v-col cols="12">
            <v-row>
              <v-col cols="12" lg="4" md="4">
                filter
              </v-col>
              <v-col cols="12" lg="8" md="8">
                <v-row>
                  <v-col cols="12" class="border-light my-3" v-for="p in allParts" :key="p.id">
                    <v-row>
                      <v-col cols="2"><img :src="p.product.img_url" alt="Image"></v-col>
                      <v-col cols="8">
                        <div> #{{ p.product.id }} |{{ p.product.fournisseur }}</div>
                        <v-row>
                          <v-col cols="6">
                            <strong>Note</strong> <br> {{ p.product.note }}
                          </v-col>
                          <v-col cols="6">
                            <strong>Applicable pour</strong> <br> {{ p.product.applicable_for }}
                          </v-col>

                          <v-col cols="6">
                            <strong>Quantité minimal requise</strong> <br> {{ p.product.min_quantity }}
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="2">
                        <h5><router-link :to="{name: 'Contact'}">Appelez-nous en magasin pour la disponibilité</router-link></h5>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CategoryParts",
  computed: {
    ...mapGetters(["allParts"])
  },
  created() {
    this.$store.dispatch("fetchByModelAndCategory", {
      model_d: this.$route.params.model_id,
      categ_id: this.$route.params.categ_id
    })
  }
}
</script>

<style scoped>
.border-light {
  border: 1px solid #ccc;
}
</style>
