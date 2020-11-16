<template>
  <div>
    <h3>사원정보</h3>
    <table>
      <tr>
        <td>글번호</td>
        <td v-html="article.no"></td>
      </tr>
      <tr>
        <td>작성자</td>
        <td v-html="article.writer"></td>
      </tr>
      <tr>
        <td>제목</td>
        <td v-html="article.title"></td>
      </tr>
      <tr>
        <td>내용</td>
        <td v-html="article.content"></td>
      </tr>
      <tr>
        <td>작성시간</td>
        <td v-html="article.regtime"></td>
      </tr>
      <tr>
        <td>
          <button name="수정하기" @click="updateArticle(article.no)">
            수정하기
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import http from '../http-common';
export default {
  name: 'SelectBoardByNo',
  props: ['no'],
  data() {
    return {
      upHere: false,
      article: {},
      loading: true,
      errored: false,
    };
  },
  methods: {
    updateArticle(did) {
      alert(did + '글을 수정합니다.');
      this.$router.push('/update/' + did);
    },
  },
  mounted() {
    http
      .get('/detail/' + this.no)
      .then((response) => (this.article = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
