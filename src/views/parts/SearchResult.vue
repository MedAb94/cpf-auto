<template>
<v-container>
  <v-row class="black--text">
    <v-col cols="12" class="border-light my-3" v-for="p in allSearchResults" :key="p.id">
      <v-row>
        <v-col cols="2">
          <img :src="p.img_url" alt="Image" v-if="p.img_url">
          <v-img src="../../assets/img/cam-icon.png" alt="Image" v-else/>
        </v-col>
        <v-col cols="8">
          <div><strong>#{{ p.ref }}</strong> |{{ p.fournisseur }}</div>
          <v-row>
            <v-col cols="6">
              <strong>Note</strong> <br> {{ p.note }}
            </v-col>
            <v-col cols="6">
              <strong>Applicable pour</strong> <br> {{ p.applicable_for }}
            </v-col>

            <v-col cols="6">
              <strong>Quantité minimal requise</strong> <br> {{ p.min_quantity }}
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">
          <div v-if="p.price && p.price!=='0.00'">
            <h2 class="red--text text-center">
              ${{p.price}}
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
    <v-col cols="12" v-if="!allSearchResults.length">
      <h1 class="text-center">Produit introuvable</h1>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "SearchResult",
  computed:{
  ...mapGetters(["allSearchResults"])
  },
  created() {
  this.$store.dispatch("search", this.$route.params.ref)
  }
}
</script>

<style scoped>

</style>
