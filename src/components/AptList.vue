<template>
  <div>
    <v-card elevation="16" max-width="500" class="mx-auto">
      <v-virtual-scroll :items="aptlist" height="500" item-height="100">
        <template v-slot:default="{ item }">
          <v-list-item>
            <apt-list-item :key="item" :apt="item" @select-apt="selectApt" />
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
  </div>
</template>

<script>
import AptListItem from '@/components/AptListItem.vue';

export default {
  name: 'AptList',
  components: {
    AptListItem,
  },
  props: {
    aptlist: Array,
    dongCode: String,
  },
  data() {
    return {
      aptlistBydong: [],
    };
  },
  methods: {
    selectApt: function(apt) {
      this.$emit('select-apt', apt);
    },
  },
  updated() {
    console.log('----APTLIST-----');
    console.log(this.dongCode);
    this.aptlist.forEach((element) => {
      console.log(element.법정동);
      if (element.법정동 == ' ' + this.dongCode) {
        console.log('들어감');
      }
    });
    console.log('------------------');
  },
};
</script>

<style></style>
