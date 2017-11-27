<style scoped>

</style>

<template>
<section class="content-wrap flex-column">
  <div class="flex-wrap">
    <router-view></router-view>
  </div>
  <!-- tabbar -->
  <tabbar style="position: fixed;">
    <tabbar-item>
      <img slot="icon" src="../../assets/images/icon/shop_y.png">
      <span slot="label">回收手机</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <img slot="icon" src="../../assets/images/icon/list_y.png">
      <span slot="label">修理手机</span>
    </tabbar-item>
    <tabbar-item badge="2">
      <img slot="icon" src="../../assets/images/icon/mine_y.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
  <!-- /tabbar -->
</section>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, Search, ViewBox, XHeader } from "vux";
export default {
  components: {
    Tabbar,
    TabbarItem,
    Search
  },
  data() {
    return {
    };
  },

  methods: {
  }
};
</script>

