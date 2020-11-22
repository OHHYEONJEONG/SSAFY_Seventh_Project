<template>
  <div>
    <v-simple-table
      style="width:500px; margin-left:auto; margin-right:auto;"
      dense
    >
      {{ envs }}
      <template v-slot:default>
        <thead>
          <tr>
            <th>업체명</th>
            <th>업종명</th>
            <th>점검사항</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in envs" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.sname }}</td>
            <td>{{ item.chkspec }}</td>
            <td>{{ item.locaddr }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'EnvInfo',
  props: ['sido', 'gugun', 'dong', 'envs'],
  data() {
    return {
      sidoname: '',
    };
  },
};
</script>

<style></style>
