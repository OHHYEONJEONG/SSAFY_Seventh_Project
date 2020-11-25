<template>
  <v-carousel v-model="model" cycle>
    <v-carousel-item v-for="img in imgs" :key="img">
      <img :src="img" />
      <v-sheet color="black" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">Happy House</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
    model: 0,
    imgs: ['../assets/home1.jpg', '../assets/home2.jpg', '../assets/home3.jpg'],
  }),
};
</script>
