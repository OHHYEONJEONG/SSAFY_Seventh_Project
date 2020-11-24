<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="hospitals"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Hospital',
  props: ['hospitals'],
  data() {
    return {
      headers: [
        {
          text: '병원이름',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '주소', value: 'address' },
        { text: '전화번호', value: 'tel' },
      ],
    };
  },
};
</script>

<style></style>
