<template>
  <div>
    <h2>게시판 글 목록</h2>
   <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
    >
      <template>
        <b-thead>
        <b-tr>
          <b-th v-for="(colname, index) in colnames" :key="index" v-html="colname"></b-th>
        </b-tr>
         </b-thead>
      </template>
  </div>
</template>

<script>
import http from '../http-common';
export default {
  name: 'Board',
  data() {
    return {
      colnames: ['글번호', '글쓴이', '제목', '시간'],
      upHere: false,
      articles: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    detailArticle(did) {
      alert(did + '글 정보입니다.');
      this.$router.push('/detail/' + did);
    },
    retrieveArticle() {
      http
        .get('/select')
        .then((response) => (this.articles = response.data))
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    deleteArticle(did) {
      alert(did + '가 삭제합니다.');
      http
        .delete('/delete/' + did)
        .then((response) => {
          if (response.data == 'success') {
            alert('삭제처리를 하였습니다.');
            this.retrieveArticle();
          } else {
            alert('삭제처리를 하지 못했습니다.');
          }
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.retrieveArticle();
  },
};
</script>

<style></style>
