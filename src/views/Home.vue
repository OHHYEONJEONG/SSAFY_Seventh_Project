<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <Main />
    <b-form inline>
    <b-dropdown text="선택">
      <b-dropdown-item href="#">전체</b-dropdown-item>
      <b-dropdown-item href="#">아파트</b-dropdown-item>
      <b-dropdown-item href="#">주택</b-dropdown-item>
    </b-dropdown>
    <b-dropdown text="시">
      <b-dropdown-item href="#">서울특별시</b-dropdown-item>
      <b-dropdown-item href="#">대전광역시</b-dropdown-item>
      <b-dropdown-item href="#">부산광역시</b-dropdown-item>
    </b-dropdown>
    <b-dropdown text="군구">
    </b-dropdown>
    <b-dropdown text="동">
    </b-dropdown>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue';

export default {
  name: 'Home',
  components: {
    Main,
  },
};
</script>
