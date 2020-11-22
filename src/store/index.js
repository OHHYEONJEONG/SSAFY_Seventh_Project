import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

// const SERVER_URL = process.env.VUE_APP_SERVER_URL;
const SERVER_URL = 'http://localhost:9999/happyhouse/api';
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    accessToken: null,
    userId: '',
    userName: '',
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken;
    },
    getUserId(state) {
      return state.userId;
    },
    getUserName(state) {
      return state.userName;
    },
  },
  mutations: {
    LOGIN(state, payload) {
      state.accessToken = payload['auth-token'];
      state.userId = payload['user-id'];
      state.userName = payload['user-name'];
    },
    LOGOUT(state) {
      state.accessToken = null;
      state.userId = '';
      state.userName = '';
    },
  },
  actions: {
    LOGIN(context, user) {
      alert('스토어에서 출력: ' + user.userid);
      return axios
        .post(`${SERVER_URL}/user/confirm/login`, user)
        .then((response) => {
          context.commit('LOGIN', response.data);
          axios.defaults.headers.common[
            'auth-token'
          ] = `${response.data['auth-token']}`;
          console.log(this.$store.state.accessToken);
        });
    },
    LOGOUT(context) {
      context.commit('LOGOUT');
      axios.defaults.headers.common['auth-token'] = undefined;
    },
  },
  modules: {},
});
