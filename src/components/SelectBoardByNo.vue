<template>
  <div>
    <h3>글 정보</h3>
    <br>
    <router-link class="btn btn-primary" to="/qnaboard">모든 글 보기</router-link>
    |
    <router-link class="btn btn-primary" to="/insert">글 등록하기 </router-link>
    <br><br>
    <table class="table table-striped table-bordered table-hover">
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
        <td colspan="2">
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
