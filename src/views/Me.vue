<template>
  <v-container class="mt-4" v-if="user">
    <v-row>
      <v-col></v-col>
      <v-col cols="8">
        <v-jumbotron>
          <template #header>My Page</template>

          <template #lead>
            내 정보 확인페이지입니다.
          </template>

          <hr class="my-4" />

          <v-container class="mt-4">
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">아이디</v-col
              ><v-col cols="4" align-self="start">{{ user.userid }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">이름</v-col
              ><v-col cols="4" align-self="start">{{ user.username }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">이메일</v-col
              ><v-col cols="4" align-self="start">{{ user.email }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">주속</v-col
              ><v-col cols="4" align-self="start">{{ user.address }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">가입일</v-col
              ><v-col cols="4" align-self="start">{{ user.joindate }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-container>
          <hr class="my-4" />

          <v-button variant="primary" href="#" class="mr-1">정보수정</v-button>
          <v-button variant="danger" href="#">회원탈퇴</v-button>
        </v-jumbotron>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
  <!-- <h2>내정보보기</h2>
    이름 : {{ user.username }}<br />
    아이디 : {{ user.userid }}<br />
    이메일 : {{ user.email }}<br />
    주소 : {{ user.address }}<br />
    가입일 : {{ user.joindate }}<br />
  </div> -->
</template>

<script>
import axios from 'axios';

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    axios
      .get(`${SERVER_URL}/user/info`)
      .then((response) => {
        this.user = response.data.user;
      })
      .catch(() => {
        this.$store.dispatch('LOGOUT').then(() => this.$router.replace('/'));
      });
  },
};
</script>

<style></style>
