<template>
  <v-row>
    <v-col>
      <input type="text" v-model="dongCode" placeholder="아파트 코드를 입력하세요." @keypress.enter="sendDongCode" />
      <v-btn @click="sendDongCode">검색</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      dongCode: ""
    };
  },
  methods: {
    sendDongCode: function() {
      //console.log(event.target.value);
      console.log(this.dongCode);
      this.$emit("send-dong-code", this.dongCode); //발생할 이벤트 이름, 보낼 데이터
    }
  }
};
</script>

<style></style>
