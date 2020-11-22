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
              <v-col cols="2" align-self="end">비밀번호</v-col
              ><v-col cols="4" align-self="start">{{ user.userpwd }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">생년월일</v-col
              ><v-col cols="4" align-self="start">{{ user.birth_date }}</v-col>
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
              <v-col cols="2" align-self="end">주소</v-col
              ><v-col cols="4" align-self="start">{{ user.address }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>

            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">결혼여부</v-col
              ><v-col cols="4" align-self="start">{{
                user.marriage_type
              }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="2" align-self="end">관심지역</v-col
              ><v-col cols="4" align-self="start">{{
                user.interest_area
              }}</v-col>
              <v-col cols="2"></v-col>
            </v-row>
          </v-container>
          <hr class="my-4" />

          <v-btn variant="primary" href="#" class="mr-1">정보수정</v-btn>
          <v-btn variant="danger" href="#">회원탈퇴</v-btn>
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
      user: '',
    };
  },
  created() {
    // 가져온 Token값을 header에 넣어주는 작업 실시.
    axios.defaults.headers.common['auth-token'] = this.$store.state.accessToken;
    axios
      .get(`${SERVER_URL}/user/info`)
      .then((response) => {
        this.user = response.data.user;
      })
      .catch(() => {
        // this.$store.dispatch('LOGOUT').then(() => this.$router.replace('/'));
      });
  },
};
</script>

<style></style>
