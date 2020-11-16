<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>아파트 매매 정보</h2>
      </b-col>
      
    </b-row>
    <b-row>
      <b-col>
        <p>*아파트 코드를 입력하세요*</p>
      </b-col>
    </b-row>
    <search-bar @send-dong-code="sendDongCode"/>
    <b-row>
      <b-col cols="5" align="left">
        <apt-list :aptlist="apts" @select-apt="selectedApt"/>
      </b-col>
      <b-col cols="7">
        <apt-detail :apt="selectApt"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import AptList from '@/components/AptList.vue';
import AptDetail from '@/components/AptDetail.vue';
import axios from 'axios';

// vue cli enviroment variables 검색
// 반드시 VUE_APP으로 시작해야 한다.
// const API_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
// const API_URL =
//   'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD=11110&DEAL_YMD=201512&serviceKey=';

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
    };
  },
  methods: {
    sendDongCode(dongCode){
      console.log("전달된 데이터: "+dongCode);
      this.dongCode = dongCode;

      const API_KEY = 'dGfDa9%2BKMT7%2Fde3pabp8NyJqgrzY8roBjPsl6AuJjoAtfz9s92qTR%2FS8KU%2FGKpWzCz7EefDTc9kwUtEYc6O29Q%3D%3D'; 
      const API_URL = 'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD='+dongCode+'&DEAL_YMD=202011&serviceKey='+API_KEY;

      axios
      .get(API_URL)
      .then((response)=>{
        console.log(response);
        this.apts=response.data.response.body.items.item;
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    selectedApt: function(apt) {
      this.selectApt = apt;
    },
  },
};
</script>

<style></style>