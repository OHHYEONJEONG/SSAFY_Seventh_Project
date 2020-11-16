<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Happy House"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=54"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12">
        <h1>Happy House!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <h1>Happy House!</h1>
      </b-carousel-slide>

    </b-carousel>
    <br><br><br>
    <div>
    <b-row>
      <b-col>
        <b-dropdown text="시">
          <b-dropdown-item href="#">서울특별시</b-dropdown-item>
          <b-dropdown-item href="#">대전광역시</b-dropdown-item>
          <b-dropdown-item href="#">부산광역시</b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col>
        <b-dropdown text="군/구">
        </b-dropdown>
      </b-col>
      <b-col>
        <b-dropdown text="동">
        </b-dropdown>
      </b-col>
    </b-row>

    </div>
    
    
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true;
      },
      onSlideEnd() {
        this.sliding = false;
      }
    }
  }
</script>

<style></style>
