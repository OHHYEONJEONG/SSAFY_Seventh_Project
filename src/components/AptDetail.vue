<template>
  <div v-if="apt" class="detail-list">
    <h3>{{ apt.아파트 }}</h3>
    <img src="@/assets/apt.png" alt="행복 아파트" />
    <div style="margin: 10px"></div>
    <b-list-group align="left">
      <b-list-group-item variant="info">일련번호 : {{apt.일련번호}}</b-list-group-item>
      <b-list-group-item variant="light">아파트 이름 : {{apt.아파트}}</b-list-group-item>
      <b-list-group-item variant="dark">법정동 : {{apt.법정동}}</b-list-group-item>
      <b-list-group-item variant="info">층수 : {{apt.층}}</b-list-group-item>
      <b-list-group-item variant="light">거래금액 : {{apt.거래금액.replace(',','')*10000 | price}}원</b-list-group-item>
    </b-list-group>
    
  </div>
</template>

<script>
export default {
  name: 'AptDetail',
  props:{
    apt:[Object,String] //apt를 Object로 받음
  },
  filters:{
    price : function(value){
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
};
</script>

<style>
.detail-list{
  border-block-color: black;
}
</style>
