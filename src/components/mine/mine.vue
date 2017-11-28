<style scoped>
.flex-bug::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #eee;
}

/* 头像 */
.avatar-wrap {
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.2);
}

.avatar-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.nick-name {
  margin-left: 20px;
  font-size: 16px;
  font-weight: 700;
}

</style>

<template>
  <div class="flex-bug">

    <!-- 头像 -->
    <div class="avatar-wrap flex-row" data-id="">
      <img class="avatar-img" :src="avatar" alt="SHIING">
      <span class="nick-name">SHINING诗永</span>
    </div>
    <!-- /头像 -->

    <group class="mine-operation">
      <cell title="我的维修单" link="/"></cell>
      <cell title="我的回收单" link="/order/recycle"></cell>
      <cell title="关于我们" link="/"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from "vux";
export default {
  components: {
    Group,
    Cell
  },
  data() {
    return {
      avatar: "http://p2.wmpic.me/article/2015/03/23/1427078164_wSVsxCiV.jpeg"
    };
  }
};
</script>


