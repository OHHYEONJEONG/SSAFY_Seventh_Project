<template>
  <v-app-bar
      app
      color="white"
      flat
    >
    <v-container class="py-0 fill-height">
          <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
          ></v-avatar>

          <v-btn
            v-for="menu in menuItems"
            :key="menu"
            :to="menu.path"
            text
          >
            {{ menu.title }}
          </v-btn>

          <v-spacer></v-spacer>

          <v-responsive max-width="260">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
            ></v-text-field>
          </v-responsive>
        </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      sidebar: false,
      menuItems: [
          { title: '아파트정보', path: '/apt'},
          { title: 'QnA 게시판', path: '/qnaboard'},
          { title: 'About', path: '/about'}
     ]
    }
  },
};
</script>
