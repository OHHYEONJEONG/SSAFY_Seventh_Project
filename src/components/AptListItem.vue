<template>
  <div
    style="margin: 10px;"
    @click="selectedApt"
    @mouseover="bgColorChange(true)"
    @mouseout="bgColorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <img src="@/assets/apt.png" class="img-list" alt="" />
    [{{ apt.일련번호 }}]
    {{ apt.아파트 }}
  </div>
</template>

<script>
export default {
  name: "AptListItem",
  data() {
    return {
      isColor: false
    };
  },
  props: {
    apt: Object
  },
  methods: {
    selectedApt: function() {
      this.$emit("select-apt", this.apt);
    },
    bgColorChange: function(flag) {
      this.isColor = flag;
    }
  }
};
</script>

<style>
.img-list {
  height: 60px;
  width: 100px;
}
.mouse-over-bgcolor {
  background-color: #7fffd4;
  font-size: 13pt;
}
</style>
