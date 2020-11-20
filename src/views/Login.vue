<template>
  <v-container class="bv-example-row">
    <v-row>
      <v-col></v-col>
      <v-col cols="8">
        <v-card
          class="mt-3"
          header="로그인"
          style="max-width: 40rem;"
          align="left"
        >
          <v-form>
            <v-text-field label="아이디:" label-for="userid">
              <v-input
                id="userid"
                v-model="user.userid"
                required
                placeholder="아이디 입력...."
              ></v-input>
            </v-text-field>
            <v-text-field label="비밀번호:" label-for="userpwd">
              <v-input
                type="password"
                id="userpwd"
                v-model="user.userpwd"
                required
                placeholder="비밀번호 입력...."
                @keypress.enter="login"
              ></v-input>
            </v-text-field>
            <v-btn type="button" variant="primary" class="m-1" @click="login"
              >로그인</v-btn
            >
            <v-btn type="button" variant="success" class="m-1">회원가입</v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  name: 'Login',
  data: function() {
    return {
      user: {
        userid: '',
        userpwd: '',
      },
      message: '',
    };
  },
  computed: {
    nextRoute() {
      return this.$route.params.nextRoute ? this.$route.params.nextRoute : '';
    },
  },
  methods: {
    login: function() {
      // LOGIN 액션 실행
      // 서버와 통신(axios)을 해 토큰값을 얻어야 하므로 Actions를 호출.
      this.$store
        .dispatch('LOGIN', this.user)
        .then(() => this.$router.replace(`/${this.nextRoute}`))
        .catch(({ message }) => (this.msg = message));
    },
  },
};
</script>

<style scope>
#login-div {
  text-align: center;
}
</style>
