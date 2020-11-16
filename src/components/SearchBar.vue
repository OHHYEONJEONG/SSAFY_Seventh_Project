<template>
  <b-row>
    <b-col>
      <input type="text" v-model="dongCode" @keypress.enter="sendDongCode"/>
      <b-button @click="sendDongCode">검색</b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      dongCode:'',
    }
  },
  methods: {
    sendDongCode:function(){
      //console.log(event.target.value);
      console.log(this.dongCode);
      this.$emit('send-dong-code',this.dongCode);//발생할 이벤트 이름, 보낼 데이터
    }
  },
};
</script>

<style></style>
