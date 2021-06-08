<template>
  <div>
    <v-navigation-drawer absolute temporary class="primary" v-model="drawer">
      <v-list class="pl-4">
        <v-list-item v-if="!$route.matched.some(({ name }) => name === 'Home')">
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
        <v-list-item>
        </v-list-item>
      </v-list>


    </v-navigation-drawer>
    <v-app-bar
        color="primary"
        dark
        flat
    >
      <div :class="$vuetify.breakpoint.mdAndUp?'mt-1':'mt-1'">
        <router-link :to="{name: 'Home'}">
          <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="../assets/logo.png"
              transition="scale-transition"
              :width="$vuetify.breakpoint.smAndDown?100:170"
          />
        </router-link>

      </div>
      <v-spacer></v-spacer>
      <v-text-field :placeholder="$t('navbar.search')" rounded outlined background-color="white" dense class="mt-5 custom-placeholer-color" >
        <template v-slot:append>
          <v-icon color="primary">mdi-magnify</v-icon>
        </template>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn text class="hidden-sm-and-down">
        <v-icon>mdi-phone</v-icon>
        514-325-4619
      </v-btn>
      <v-btn href="/cart" icon>
        <v-badge
            content="2"
            value="2"
            color="green"
            overlap
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn
          text class="white--text"
          v-if="$i18n.locale==='en'"
          @click="switchLang('fr')"
      >
        Fr
      </v-btn>
      <v-btn
          text class="white--text ml-2"
          v-if="$i18n.locale==='fr'"
          @click="switchLang('en')"
      >
        En
      </v-btn>
      <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up white--text "
      />
    </v-app-bar>
    <!--    Lg navbar-->
    <v-layout class="blueDark white--text">
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link :to="{name:'Home'}" v-if="!$route.matched.some(({ name }) => name === 'Home')">
          <v-btn text class="white--text">
            {{ $t('navbar.home') }}
          </v-btn>
        </router-link>
        <router-link :to="{name:'About'}">
          <v-btn text class="white--text">
            {{ $t('navbar.about') }}
          </v-btn>
        </router-link>
        <router-link class="white--text" :to="{name:'Parts'}">
          <v-btn text class="white--text">
            {{ $t('navbar.parts') }}
          </v-btn>
        </router-link>
        <router-link :to="{name:'Contact'}">
          <v-btn text class="white--text">
            {{ $t('navbar.contact') }}
          </v-btn>
        </router-link>
        <router-link :to="{name:'Login'}">
          <v-btn text class="white--text">
            {{ $t('navbar.account') }}
          </v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>
    </v-layout>
  </div>
</template>

<script>
import i18n from '../i18n'

export default {
  name: 'Navbar',
  methods: {
    switchLang(lang) {
      i18n.locale = lang;
    }
  },
  data: () => ({
    drawer: false
  }),
}
</script>
<style>
a {
  text-decoration: none;
}
.custom-placeholer-color input::placeholder {
  color: black !important;
  opacity: 0.8;
}

</style>
