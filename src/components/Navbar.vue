<template>
  <div>
    <v-navigation-drawer absolute temporary class="primary" v-model="drawer">
      <v-list class="pl-4">
        <v-list-item>
          <v-list-item-title>
            <a href="/" >
              <v-btn text class="white--text">
                {{ $t('navbar.home') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <a href="/about" >
              <v-btn text class="white--text">
                {{ $t('navbar.about') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <a href="/parts" >
              <v-btn text class="white--text">
                {{ $t('navbar.parts') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <a href="/contact" >
              <v-btn text class="white--text">
                {{ $t('navbar.contact') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>
            <a href="/account" >
              <v-btn text class="white--text">
                {{ $t('navbar.account') }}
              </v-btn>
            </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
        </v-list-item>
      </v-list>


    </v-navigation-drawer >
    <v-app-bar
        color="primary"
        dark
        flat
    >
      <div :class="$vuetify.breakpoint.mdAndUp?'mt-1':'mt-1'">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/logo.png"
            transition="scale-transition"
            :width="$vuetify.breakpoint.smAndDown?100:170"
        />
      </div>

      <v-spacer></v-spacer>
      <v-text-field rounded outlined background-color="white" dense class="mt-5">
        <template v-slot:append>
          <v-icon color="primary">mdi-magnify</v-icon>
        </template>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>mdi-phone</v-icon>
        524-325-4619
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
          text class="white--text ml-5"
          v-if="$i18n.locale==='en'"
          @click="switchLang('fr')"
      >
        Français
      </v-btn>
      <v-btn
          text class="white--text ml-5"
          v-if="$i18n.locale==='fr'"
          @click="switchLang('en')"
      >
        English
      </v-btn>
    </v-app-bar>
    <v-layout class="blueDark white--text">
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <a href="/" >
          <v-btn text class="white--text">
            {{ $t('navbar.home') }}
          </v-btn>
        </a>
        <a href="/about" >
          <v-btn text class="white--text">
            {{ $t('navbar.about') }}
          </v-btn>
        </a>
        <a class="white--text" href="/parts" >
          <v-btn text class="white--text">
            {{ $t('navbar.parts') }}
          </v-btn>
        </a>
        <a href="/contact" >
          <v-btn text class="white--text">
            {{ $t('navbar.contact') }}
          </v-btn>
        </a>
        <a href="/auth" >
          <v-btn text class="white--text">
            {{ $t('navbar.account') }}
          </v-btn>
        </a>
      </div>
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up white"
      />
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
</style>
