<template>
  <div>
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

      <!-- 시,군구,동 별 검색 -->
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
            v-on:change="selectedSido"
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
            v-on:change="selectedGugun"
          >
            <template slot="selection" slot-scope="data">
              {{ data.item.gugunName }}
            </template>
          </v-select>
        </v-col>
        <v-col class="d-flex" cols="4" sm="4">
          <v-select
            label="동"
            v-bind:items="dongs"
            v-model="selectDong"
            item-text="dongName"
            item-value="dongName"
            max-height="auto"
            autocomplete
            v-on:change="selectedDong"
          >
            <template slot="selection" slot-scope="data">
              {{ data.item.dongName }}
            </template>
          </v-select>
        </v-col>
      </v-row>
      <!-- MAP and Apt List-->
      <v-row>
        <h3>총 {{ apts.length }} 개의 결과물이 있습니다.</h3>
      </v-row>
      <v-row>
        <v-col cols="6"
          ><KakaoMap
            :si="sidoName"
            :gugun="gugunName"
            :dong="selectDong"
            :aptlist="apts"
        /></v-col>
        <v-col cols="6" align="left">
          <apt-list
            :aptlist="apts"
            @select-apt="selectedApt"
            :dongCode="selectDong"
          />
        </v-col>
      </v-row>

      <!-- apt 상세정보 -->
      <v-row>
        <v-col cols="12">
          <div id="aptdetail">
            <h2>아파트 상세정보</h2>
            <v-row>
              <v-col cols="4"></v-col>
              <v-col cols="4">
                <apt-detail :apt="selectApt" />
              </v-col>
              <v-col cols="4"></v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" align="center">
          <apt-around-info
            :sido="selectSido"
            :gugun="selectGugun"
            :dong="selectDong"
            :envs="envs"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import AptList from '@/components/AptList.vue';
import AptDetail from '@/components/AptDetail.vue';
import KakaoMap from '@/components/map/KakaoMap.vue';
import AptAroundInfo from '@/components/AptAroundInfo.vue';
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
    KakaoMap,
    AptAroundInfo,
  },
  data() {
    return {
      dongCode: '',
      selectApt: '',
      apts: [],
      selectSido: '',
      selectGugun: '',
      selectDong: '',
      sidos: [],
      guguns: [],
      dongs: [],
      sidoName: '',
      gugunName: '',
      dongName: '',
      envs: [],
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
          this.apts = response.data.response.body.items.item;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectedApt: function(apt) {
      this.selectApt = apt;
    },
    selectedSido: function() {
      http
        .get('/map/sido/' + this.selectSido)
        .then((response) => (this.guguns = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    selectedGugun: function() {
      http
        .get('/map/sido/gugun/' + this.selectGugun)
        .then((response) => (this.dongs = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    selectedDong: function() {
      // 동까지 골라지면
      this.sendDongCode(this.selectGugun);
      http // 시코드로 시이름 구하고
        .get('/map/getSiName/' + this.selectSido)
        .then((response) => (this.sidoName = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
      http // 구군코드로 구군이름 얻어오고
        .get('/map/getGugunName/' + this.selectGugun)
        .then((response) => (this.gugunName = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => {
          console.log(this.gugunName);
          console.log(this.selectDong);
          http // 해당 동의 환경정보 가져옴
            .get(
              '/aptaround/env/' +
                this.sidoName +
                ' ' +
                this.gugunName +
                '/' +
                this.selectDong
            )
            .then((response) => (this.envs = response.data))
            .catch(() => {
              this.errored = true;
            })
            .finally(() => (this.loading = false));
        });
    },
  },
};
</script>

<style>
#aptdetail {
  align-content: center;
  height: 600px;
  width: 100%;
  border: 1px solid black;
}
</style>
