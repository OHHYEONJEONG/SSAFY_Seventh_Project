<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>아파트 매매 정보</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>*아파트 코드를 입력하세요*</p>
      </v-col>
    </v-row>
    <search-bar @send-dong-code="sendDongCode" />
    <v-row>
      <v-col cols="5" align="left">
        <apt-list :aptlist="apts" @select-apt="selectedApt" />
      </v-col>
      <v-col cols="7">
        <apt-detail :apt="selectApt" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="4" sm="4">
        <v-select
          label="시"
          v-bind:items="sidos"
          v-model="selectSido"
          item-text="sidoName"
          item-value="sidoCode"
          max-height="auto"
          autocomplete
          v-on:change="selectedGugun"
        >
          <template slot="selection" slot-scope="data">
            {{ data.item.sidoName }}
          </template>
        </v-select>
      </v-col>
      <v-col class="d-flex" cols="4" sm="4">
        <v-select
          label="구/군"
          v-bind:items="guguns"
          v-model="selectGugun"
          item-text="gugunName"
          item-value="gugunCode"
          max-height="auto"
          autocomplete
          v-on:change="selectedDong"
        >
          <template slot="selection" slot-scope="data">
            {{ data.item.gugunName }}
          </template>
        </v-select>
      </v-col>
      <v-col class="d-flex" cols="4" sm="4">
        <v-select :items="items" label="Standard" dense></v-select>
      </v-col>
    </v-row>
    <!-- vuetify 이용한 구글 맵-->
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="clickMarker"
      />
    </GmapMap>
  </v-container>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import AptList from '@/components/AptList.vue';
import AptDetail from '@/components/AptDetail.vue';
import http from '../http-common';
import axios from 'axios';

// vue cli enviroment variables 검색
// 반드시 VUE_APP으로 시작해야 한다.
const API_KEY = process.env.VUE_APP_APT_DEAL_API_KEY; //env 파일이름으로
const API_URL =
  'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';

export default {
  name: 'Apt',
  components: {
    SearchBar,
    AptList,
    AptDetail,
  },
  data() {
    return {
      dongCode: '',
      selectApt: '',
      apts: [],
      selectSido: {},
      selectGugun: '',
      sidos: [],
      guguns: [],
    };
  },
  mounted() {
    http
      .get('/map/sido')
      .then((response) => (this.sidos = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    sendDongCode(dongCode) {
      console.log('전달된 데이터: ' + dongCode);
      this.dongCode = dongCode;

      // const API_KEY = 'dGfDa9%2BKMT7%2Fde3pabp8NyJqgrzY8roBjPsl6AuJjoAtfz9s92qTR%2FS8KU%2FGKpWzCz7EefDTc9kwUtEYc6O29Q%3D%3D';
      // const API_URL = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD='+dongCode+'&DEAL_YMD=202011&serviceKey='+API_KEY;
      // axios
      // .get(API_URL)
      // .then((response)=>{
      //   console.log(response);
      //   this.apts=response.data.response.body.items.item;
      // })
      // .catch((error)=>{
      //   console.log(error);
      // });

      const params = {
        LAWD_CD: this.dongCode,
        DEAL_YMD: '202011',
        serviceKey: decodeURIComponent(API_KEY),
      };
      axios
        .get(API_URL, {
          //params:params
          params,
        })
        .then((response) => {
          console.log(response);
          this.apts = response.data.response.body.items.item;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectedApt: function(apt) {
      this.selectApt = apt;
    },
    selectedGugun: function() {
      http
        .get('/map/sido/' + this.selectSido)
        .then((response) => (this.guguns = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    selectedDong: function() {
      alert(this.selectGugun);
    },
    clickMarker: function() {
      // ----------MAP------------
      this.$dialog.confirm({
        text:
          "What's your name? <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/1200px-Natgeologo.svg.png' height=100/><input value='input'></input>",
        title: 'Warning',
      });
    },
  },
};
</script>

<style></style>
