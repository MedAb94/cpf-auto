<template>
  <div>
    <section class="hero">
      <v-container class="fill-height">
        <v-row class="fill-height " align="center" justify="stretch">
          <v-col class="text-center">
            <v-card class="pl-8" style="border-radius: 30px">
              <v-row class="ma-0">
                <v-col cols="3">
                  <v-select
                      :label="$t('parts.filter.year')"
                      class="border-r"
                      :items="years"
                      v-model="year"
                      @change="fetchModels"
                  >
                    <v-icon slot="prepend" color="blue">mdi-calendar</v-icon>
                  </v-select>
                </v-col>
                <v-col cols="4">
                  <v-select
                      :label="$t('parts.filter.make')"
                      :items="allMakes"
                      item-text="name"
                      item-value="id"
                      v-model="make"
                      class="border-r"
                      @change="fetchModels"
                  >
                    <v-icon slot="prepend" color="blue">mdi-calendar</v-icon>
                  </v-select>
                </v-col>
                <v-col cols="4">
                  <v-select
                      :label="$t('parts.filter.model')"
                      item-text="name"
                      item-value="id"
                      :items="allMakeModels"
                      v-model="model">
                    <v-icon slot="prepend" color="blue">mdi-calendar</v-icon>
                  </v-select>
                </v-col>
                <v-col cols="1" class="primary mr-0" style="border-radius: 30px; ">
                  <v-btn text class="primary mt-5 py-2" @click="$store.dispatch('fetchModelCategories', model)">
                    <v-icon x-large>mdi-magnify</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>


    </section>
    <section class=" pa-3 light pa-md-10">
      <h3 class="my-5"> {{ $t('parts.selectCateg') }}
      </h3>
      <v-row justify="stretch">
        <v-col cols="12" lg="3" md="4"
               v-for="c in allModelCategories" :key="c.id"
        >
          <router-link
              class="white--text "
              :to="{name : 'CategParts', params:{categ_id: c.id, model_id: model, categ_name: c.name}}"
          >
            <v-card
                flat
                class="mx-auto"
                max-width="344"
            >
              <v-img
                  src="../../assets/img/4.jpg"
              />
              <v-card-title class="primary white--text text-center">
                {{ c.name }}
              </v-card-title>
              <v-card-text v-if="c.subsShown">
                <v-list>
                  <v-list-item v-for="sub in c.sous_categories">
                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link :to="{name : 'CategParts', params:{categ_id: 1, model_id: 1}}">
                          {{ sub.name }}
                        </router-link>
                      </v-list-item-title>
                      <v-list-item-subtitle> {{ sub.sous_related_categories.length }} Parts</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </section>
    <mail-box/>
  </div>

</template>
<script>
import MailBox from "../../components/MailBox.vue";
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {MailBox},
  data: () => ({year: new Date().getFullYear(), make: '', model: ''}),
  methods: {
    fetchModels() {
      if (this.year && this.make)
        this.$store.dispatch('fetchMakeModels', {year: this.year, make_id: this.make})
    }
  },
  computed: {
    ...mapGetters(["allMakes", "allMakeModels", "allModelCategories"]),
    years() {
      let list = []
      let current_year = new Date().getFullYear()
      for (let i = current_year + 1; i > 1990; i--) {
        list.push(i)
      }
      return list
    }
  },
  created() {
    this.$store.dispatch("fetchMakes")
  }
}
</script>
<style scoped>
.border-r {
  border-right: 5px solid #0088ff;
}

.hero {
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url('../../assets/img/3.jpg') center center no-repeat;
  background-size: contain;
}

</style>
