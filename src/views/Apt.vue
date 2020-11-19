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
  </v-container>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import AptList from "@/components/AptList.vue";
import AptDetail from "@/components/AptDetail.vue";
import axios from "axios";

// vue cli enviroment variables 검색
// 반드시 VUE_APP으로 시작해야 한다.
const API_KEY = process.env.VUE_APP_APT_DEAL_API_KEY; //env 파일이름으로
const API_URL =
  "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";

export default {
  name: "Apt",
  components: {
    SearchBar,
    AptList,
    AptDetail
  },
  data() {
    return {
      dongCode: "",
      selectApt: "",
      apts: []
    };
  },
  methods: {
    sendDongCode(dongCode) {
      console.log("전달된 데이터: " + dongCode);
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
        DEAL_YMD: "202011",
        serviceKey: decodeURIComponent(API_KEY)
      };
      axios
        .get(API_URL, {
          //params:params
          params
        })
        .then(response => {
          console.log(response);
          this.apts = response.data.response.body.items.item;
        })
        .catch(error => {
          console.log(error);
        });
    },
    selectedApt: function(apt) {
      this.selectApt = apt;
    }
  }
};
</script>

<style></style>
