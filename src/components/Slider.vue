<template>
  <section>
    <v-carousel v-model="model">
      <v-carousel-item
          v-for="c in 3"
          :key="c"
          src="../assets/slide/1.jpg"
          style="background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('../assets/slide/1.jpg');"
      >
        <v-row
            class="fill-height"
            align="center"
            justify="center"
        >
          <v-col cols="12" class="text-center">
            <div class="display-2">
              {{ $t("home.title") }}
            </div>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn class="primary">{{ $t("home.shopNow") }}</v-btn>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: "Slider",
  data(){
    return {
      model : 0
    }
  }
}
</script>

<style scoped>

</style>
