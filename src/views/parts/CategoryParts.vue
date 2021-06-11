<template>
  <v-container>
    <v-card>
      <v-card-title class="black white--text">{{ $route.params.categ_name }}</v-card-title>
      <v-card-text>
        <v-row class="my-3">
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <v-row class="black--text">
                  <v-col cols="12" class="border-light my-3" v-for="p in allParts" :key="p.id">
                    <v-row>
                      <v-col cols="2">
                        <img :src="p.product.img_url" alt="Image" v-if="p.product.img_url">
                        <v-img src="../../assets/img/cam-icon.png" alt="Image" v-else/>
                      </v-col>
                      <v-col cols="8">
                        <div><strong>#{{ p.product.id }}</strong> |{{ p.product.fournisseur }}</div>
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
                        <div v-if="p.product.price && p.product.price!=='0.00'">
                          <h2 class="red--text text-center">
                            ${{p.product.price}}
                          </h2>

                          <input type="number" min="1" class="form-control" value="1">
                          <v-btn text small class="primary " >Ajouter au panier</v-btn>
                        </div>
                        <h5 class="border-light" v-else>
                          <router-link :to="{name: 'Contact'}">Appelez-nous en magasin pour la disponibilité
                          </router-link>
                        </h5>
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
input[type=number] {
  width: 100%;
  padding: 5px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 10%;
}
</style>
