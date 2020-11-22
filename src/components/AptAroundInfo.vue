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
        <v-tab-item v-for="item in items" :key="item">
          <v-card color="basil" flat>
            <v-card-text v-if="tab == 0">
              <env-info :sido="sido" :gugun="gugun" :dong="dong" :envs="envs" />
            </v-card-text>
            <v-card-text v-else-if="tab == 1">
              <store-info
                :sido="sido"
                :gugun="gugun"
                :dong="dong"
                :envs="envs"
              />
            </v-card-text>
            <v-card-text v-else-if="tab == 2">편의</v-card-text>
            <v-card-text v-else-if="tab == 3">코로나19</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import EnvInfo from '@/components/apt_aroundinfo/EnvInfo.vue';
import StoreInfo from '@/components/apt_aroundinfo/StoreInfo.vue';
export default {
  name: 'AptAroundInfo',
  props: ['sido', 'gugun', 'dong', 'envs'],
  components: {
    EnvInfo,
    StoreInfo,
  },
  data() {
    return {
      tab: null,
      items: ['환경', '안전', '편의', '코로나19'],
    };
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
