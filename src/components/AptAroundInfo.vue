<template>
  <div class="around">
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">
          주변환경정보
        </h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
          v-on:click="clickTab(item)"
        >
          <v-card color="basil" flat>
            <v-card-text v-if="tab == 0">
              <env-info :sido="sido" :gugun="gugun" :dong="dong" :envs="envs" />
            </v-card-text>
            <v-card-text v-else-if="tab == 1">
              <store-info
                :sidoname="sidoname"
                :gugunname="gugunname"
                :dong="dong"
                :stores="stores"
              />
            </v-card-text>
            <v-card-text v-else-if="tab == 2">편의</v-card-text>
            <v-card-text v-else-if="tab == 3">
              <v-btn @click="isClinic" class="pink white--text"
                >코로나 선별 진료소</v-btn
              >
              <v-btn @click="isHospital" class="pink white--text"
                >코로나 안심 병원</v-btn
              >

              <br />
              <br />
              <div v-if="clinicORhospital == 'clinic'">
                <corona-clinic :clinics="clinics" />
              </div>
              <div v-if="clinicORhospital == 'hospital'">
                <hospital :hospitals="hospitals" />
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import EnvInfo from '@/components/apt_aroundinfo/EnvInfo.vue';
import StoreInfo from '@/components/apt_aroundinfo/StoreInfo.vue';
import CoronaClinic from '@/components/apt_aroundinfo/CoronaClinic.vue';
import Hospital from '@/components/apt_aroundinfo/Hospital.vue';
import http from '../http-common';

export default {
  name: 'AptAroundInfo',
  props: ['sido', 'sidoname', 'gugun', 'gugunname', 'dong', 'envs'],
  components: {
    EnvInfo,
    StoreInfo,
    CoronaClinic,
    Hospital,
  },
  data() {
    return {
      tab: null,
      items: ['환경', '상가', '편의', '코로나19'],
      stores: [],
      clinicORhospital: 'clinic',
      clinics: [],
      hospitals: [],
    };
  },
  created() {
    this.clickTab(this.tab);
  },
  methods: {
    clickTab(tab) {
      console.log(tab);
      if (tab == '상가') {
        // updated로 하면 계속 불려짐,,,
        http // 해당 동의 주변상가정보 가져옴
          .get(
            '/aptaround/store/' +
              this.sidoname +
              '/' +
              this.gugunname +
              '/' +
              this.dong
          )
          .then((response) => (this.stores = response.data))
          .catch(() => {
            this.errored = true;
          })
          .finally(() => (this.loading = false));
      }
    },
    isClinic() {
      this.clinicORhospital = 'clinic';
      http // 해당 동의 주변 코로나 진료소 정보 가져옴
        .get('/aptaround/coronaclinic/' + this.sidoname + '/' + this.gugunname)
        .then((response) => (this.clinics = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    isHospital() {
      this.clinicORhospital = 'hospital';
      http // 해당 동의 주변 안심병원 정보 가져옴
        .get('/aptaround/hospital/' + this.sidoname + '/' + this.gugunname)
        .then((response) => (this.hospitals = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
/* Helper classes */
.around {
  width: 100%;
  height: 500px;
}
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
.around {
  height: 100px;
  background-color: #fffbe6 !important;
}
</style>
