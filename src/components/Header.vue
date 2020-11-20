<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn v-for="menu in menuItems" :key="menu" :to="menu.path" text>
        {{ menu.title }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-collapse id="nav-collapse" is-nav>
        <v-navbar-nav class="ml-auto" v-if="getAccessToken">
          <v-nav-item
            ><avatarvariant="primary"v-text="getUserId.charAt(0).toUpperCase()"/>
            {{ getUserName }}({{ getUserId }})님 환영합니다.
          </v-nav-item>
          <v-nav-item
            ><router-link to="/me">내정보보기</router-link></v-nav-item
          >
          <v-nav-item @click.prevent="onClickLogout">로그아웃</v-nav-item>
          <!-- <v-nav-item href="/me">내정보보기</v-nav-item>
            <v-nav-item href="/logout">로그아웃</v-nav-item> -->
        </v-navbar-nav>
        <v-navbar-nav class="ml-auto" v-else>
          <v-nav-item>
            <router-link to="/login">로그인</router-link></v-nav-item
          >
          <v-nav-item
            ><router-link to="/join">회원가입</router-link></v-nav-item
          >
          <!-- <v-nav-item href="/login">로그인</v-nav-item>
            <v-nav-item href="/join">회원가입</v-nav-item> -->
        </v-navbar-nav>
      </v-collapse>
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
