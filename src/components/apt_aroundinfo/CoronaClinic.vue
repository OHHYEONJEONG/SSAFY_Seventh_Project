<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="clinics"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'CoronaClinic',
  props: ['clinics'],
  data() {
    return {
      headers: [
        {
          text: '병원이름',
          align: 'start',
          sortable: false,
          value: 'hospitalName',
        },
        { text: '주소', value: 'address' },
        { text: '평일 진료시간', value: 'weekDayOp' },
        { text: '토요일 진료시간', value: 'satOp' },
        { text: '공휴일 진료시간', value: 'sunOp' },
        { text: '전화번호', value: 'tel' },
      ],
    };
  },
};
</script>

<style></style>
