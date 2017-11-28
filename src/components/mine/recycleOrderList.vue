<style scoped>
.content-wrap {
  background-color: #eee;
}

/* 订单列表 */
.order-item {
  padding: 20px 10px;
  background-color: #fff;
  align-items: center;
  font-size: 15px;
  margin-bottom: 20px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2);
}

.order-item-img {
  width: 70px;
  height: 70px;
  margin: 10px;
}

.order-item-infos {
  flex: 1;
}

.order-item-time-wrap {
  justify-content: space-between;
  align-items: center;
}

.order-item-price {
  color: #fcdb00;
  font-weight: 700;
}

.order-item-type {
  font-weight: 700;
}

.order-item-sendbtn {
  display: inline-block;
  background-color: #fcdb00;
  font-size: 14px;
  border-radius: 4px;
  line-height: 2.3;
  padding: 0 10px;
}
</style>

<template>
  <div class="content-wrap">
    <x-header>我的回收单</x-header>
    <div class="order-item flex-row" v-for="listItem in list" :key="listItem.id">
      <img class="order-item-img" :src="listItem.img" :alt="listItem.type">
      <div class="order-item-infos">
        <p>手机型号：<span class="order-item-type">{{listItem.type}}</span></p>
        <p>回收价格：<span class="order-item-price">￥{{listItem.price}}</span></p>
        <p class="order-item-time-wrap flex-row">
          <span class="order-item-time">下单时间：{{listItem.time}}</span>
          <span class="order-item-sendbtn" v-if="listItem.state === 0">去发货</span>
        </p>
        <p v-if="listItem.state !== 0">快递单号：{{listItem.number}}</p>
        <p v-if="listItem.state !== 0">快递公司：{{listItem.company}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader
  },
  data() {
    return {
      list: [
        {
          id: 1,
          img:
            "http://img.ltn.com.tw/Upload/3c/page/2016/12/09/161209-27723-2.jpg",
          type: "iphone X",
          price: 300,
          time: "2017-10-21",
          state: 0
        },
        {
          id: 2,
          img:
            "http://img.ltn.com.tw/Upload/3c/page/2016/12/09/161209-27723-2.jpg",
          type: "iphone X",
          price: 300,
          time: "2017-10-21",
          state: 1,
          number: 1545612154621,
          company: "申通"
        }
      ]
    };
  }
};
</script>


