<template>
  <div>
    <v-card elevation="16" max-width="400" class="mx-auto">
      <v-virtual-scroll
        :items="aptlist"
        :bench="benched"
        height="300"
        item-height="64"
      >
        <apt-list-item
          v-for="(apt, index) in aptlist"
          :key="index"
          :apt="apt"
          @select-apt="selectApt"
        />
      </v-virtual-scroll>
    </v-card>

    <p>{{ dongCode }}</p>
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
  computed() {
    console.log('created');
    this.aptlist.forEach((element) => {
      if (element.법정동읍면동코드 == this.dongCode) {
        this.aptlistBydong.push(element);
      }
    });
  },
};
</script>

<style></style>
