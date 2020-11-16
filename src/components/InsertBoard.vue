<template>
  <div>
    <div v-if="!submitted">
      <form
        action
        method="post"
        id="_frmForm"
        name="frmForm"
        @submit.prevent="insertBoard"
      >
        <table class="content_table">
          <colgroup>
            <col style="width:30%;" />
            <col style="width:70%;" />
          </colgroup>
          <tr>
            <th>작성자</th>
            <td>
              <input
                data-msg="이름"
                type="text"
                name="name"
                id="_name"
                v-model="writer"
                style="width:30%"
              />
            </td>
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
                v-model="title"
                style="width:30%"
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
                v-model="content"
                style="width:30%"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2" style="height:50px; text-align:center;">
              <button type="submit" name="button">글등록</button>
            </td>
          </tr>
        </table>
      </form>
    </div>

    <div v-else>
      <h4>성공적으로 글등록이 완료하였습니다!</h4>
      <button class="btn btn-success" v-on:click="newContent">
        새로 글 추가하기
      </button>
    </div>
  </div>
</template>
<script>
import http from '../http-common';
export default {
  name: 'InsertBoard',
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
      writer: null,
      title: null,
      content: '',
      submitted: false,
    };
  },
  mounted() {
    http
      .get('/insert')
      .then((response) => (this.info = response.data))
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    insertBoard() {
      if (this.writer == '') {
        alert('글쓴이를 입력하세요.');
        return;
      }
      if (this.title == '') {
        alert('제목을 선택하세요.');
        return;
      }
      if (this.title == '') {
        alert('내용을 선택하세요.');
        return;
      }

      http
        .post('/insertBoard', {
          writer: this.writer,
          title: this.title,
          content: this.content,
        })
        .then((response) => {
          if (response.data == 'success') {
            alert('글등록 처리를 하였습니다.');
          } else {
            alert('글등록 처리를 하지 못했습니다.');
          }
        });
      this.submitted = true;
    },
    newCustomer() {
      (this.submitted = false),
        (this.writer = null),
        (this.title = null),
        (this.title = null);
    },
  },
};
</script>

<style scoped></style>
