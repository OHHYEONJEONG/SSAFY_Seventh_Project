<template>
  <div>
    <h3>사원정보</h3>
    <br />
    <router-link class="btn btn-primary" to="/qnaboard"
      >모든 글 보기</router-link
    >
    |
    <router-link class="btn btn-primary" to="/insert">글 등록하기 </router-link>
    <br /><br />
    
    
    <v-simple-table style="width:500px; margin-left:auto; margin-right:auto;border:1px solid black; border-collapse:collase;" dense>
      
      <tr>
        <td>글번호</td>
        <td v-html="article.no"></td>
      </tr>
      <tr>
        <td>작성자</td>
        <td v-html="article.writer"></td>
      </tr>
      <tr>
        <th>제목</th>
        <td>
          <input
            data-msg="제목"
            type="text"
            name="title"
            id="_title"
            size="20"
            v-model="article.title"
          />
        </td>
      </tr>
      <tr>
        <th>내용</th>
        <td>
          <input
            data-msg="내용"
            type="text"
            name="content"
            id="_content"
            size="30"
            v-model="article.content"
            style="width:100%; height:100px;"
          />
        </td>
      </tr>
      <tr>
        <td colspan="2" style="height:50px; text-align:center;">
          <v-btn type="submit" name="button" @click="updateBoard">
            글수정
          </v-btn>
        </td>
      </tr>    
    </v-simple-table>
  </div>
</template>

<script>
import http from "../http-common";
export default {
  name: "SelectBoardByNo",
  props: ["no"],
  data() {
    return {
      upHere: false,
      article: {},
      loading: true,
      errored: false
    };
  },
  methods: {
    updateBoard() {
      if (this.article.title == "") {
        alert("제목을 작성하세요.");
        return;
      }
      if (this.article.content == "") {
        alert("내용을 작성하세요.");
        return;
      }

      http.put("/update/" + this.article.no, this.article).then(response => {
        if (response.data == "success") {
          alert("글등록 업데이트처리를 하였습니다.");
        } else {
          alert("글등록 업데이트처리를 하지 못했습니다.");
        }
      });
      this.submitted = true;
    },
    newCustomer() {
      (this.submitted = false),
        (this.writer = null),
        (this.title = null),
        (this.content = null);
    }
  },
  mounted() {
    http
      .get("/detail/" + this.no)
      .then(response => (this.article = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
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
