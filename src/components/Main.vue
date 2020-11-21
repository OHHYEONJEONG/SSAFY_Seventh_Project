<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item>
        <img src="../assets/home1.jpg" height="500" width="1000" />
        <v-sheet color="black" height="100%" width="1000">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              HAPPY HOUSE
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <img src="../assets/home2.jpg" height="500" width="1000" />
        <v-sheet>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              HAPPY HOUSE
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <img src="../assets/home3.jpg" height="500" width="1000" />
        <v-sheet>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              HAPPY HOUSE
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <br /><br /><br />
    <div>
      <v-row>
        <v-col>
          <v-dropdown text="시">
            <v-dropdown-item href="#">서울특별시</v-dropdown-item>
            <v-dropdown-item href="#">대전광역시</v-dropdown-item>
            <v-dropdown-item href="#">부산광역시</v-dropdown-item>
          </v-dropdown>
        </v-col>
        <v-col>
          <v-dropdown text="군/구"> </v-dropdown>
        </v-col>
        <v-col>
          <v-dropdown text="동"> </v-dropdown>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {};
  },
};
</script>

<style></style>
