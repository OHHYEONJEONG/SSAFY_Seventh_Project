<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn v-for="menu in menuItems" :key="menu" :to="menu.path" text>
        {{ menu.title }}
      </v-btn>

      <v-spacer></v-spacer>
      <div v-if="getAccessToken">
        <v-btn to="/me">마이페이지</v-btn>
        <v-btn @click.prevent="onClickLogout">로그아웃</v-btn>
      </div>

      <div v-else>
        <v-btn v-for="login in loginIems" :key="login" :to="login.path" text>
          {{ login.title }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',

  data() {
    return {
      isLogin: false,
      sidebar: false,
      menuItems: [
        { title: '아파트정보', path: '/apt' },
        { title: 'QnA 게시판', path: '/qnaboard' },
        { title: 'About', path: '/about' },
      ],
      loginIems: [
        { title: '로그인', path: '/login' },
        { title: '회원가입', path: '/join' },
      ],
      logoutIems: [
        { title: '로그아웃', path: '/logout' },
        { title: '마이페이지', path: '/me' },
      ],
    };
  },

  computed: {
    ...mapGetters(['getAccessToken', 'getUserId', 'getUserName']),
  },
  methods: {
    onClickLogout() {
      this.$store
        .dispatch('LOGOUT')
        .then(() => this.$router.replace('/').catch(() => {}));
    },
  },
};
</script>
