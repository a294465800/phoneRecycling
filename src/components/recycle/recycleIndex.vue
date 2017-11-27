<style scoped>
.flex-bug {
  background: #eee;
}
.serach-wrap {
  background-color: rgba(252, 219, 0, 0.6);
  padding: 7px 10px;
  font-size: 14px;
  width: 100%;
  height: 45px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.search {
  background-color: #fff;
  text-align: center;
  height: 31px;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
}

.search-text {
  color: #a7a3a1;
}

.search-part-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: none;
  z-index: 999;
}

.search-part-wrap.active {
  display: block;
}

.search-input {
  border: 0;
  outline: 0;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
}

.search-cancel {
  color: #fcdb00;
}

.search-list {
  margin-top: 60px;
  flex-wrap: wrap;
  padding: 0 10px 10px;
}

.search-list > h3 {
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;
}

.search-tag {
  background-color: #e7e7e7;
  padding-left: 13px;
  padding-right: 13px;
  white-space: nowrap;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 2em;
  font-size: 13px;
  color: #686868;
  border-radius: 4px;
}

/* 商品列表 */
.phone-list {
  flex-wrap: wrap;
}

.phone-item {
  width: 50%;
  display: inline-block;
  text-align: center;
}

.phone-link {
  margin: 8px 4px 0 8px;
  background-color: #fff;
  display: block;
  color: #333;
  padding-bottom: 10px;
}

.phone-item-name {
  font-size: 14px;
  font-weight: 700;
}

.phone-item-price {
  margin-top: 5px;
  margin-bottom: 5px;
}

.phone-item-price>span {
  color: #fcdb00;
}

.phone-item-btn {
  background-color: #fcdb00;
  color: #333;
  border-radius: 4px;
  display: inline-block;
  line-height: 2.3em;
  font-size: 14px;
  outline: none;
  border: 0;
  width: 90%;
}
</style>

<template>
  <div class="flex-bug">
    <!-- 搜索框 -->
    <div class="serach-wrap">
      <div class="search flex-row" @click="openSearchView">
        <icon type="search"></icon>
        <span class="search-text">输入你要卖的手机型号</span>
      </div>
    </div>
    <!-- /搜索框 -->

    <!-- 轮播 -->
    <swiper loop auto height="200px" dots-position="center" :list="baseList" :index="currentSwiper"></swiper>
    <!-- /轮播 -->

    <!-- 商品列表 -->
    <ul class="phone-list flex-row">
      <li class="phone-item" v-for="phone in phoneList" :key="phone.id">
        <a class="phone-link" href="javascript:;">
          <img class="phone-item-img" :src="phone.url" :alt="phone.name">
          <h3 class="phone-item-name">{{phone.name}}</h3>
          <p class="phone-item-price">最高回收价：<span>￥{{phone.price}}</span></p>
          <button class="phone-item-btn">立即回收</button>
        </a>
      </li>
    </ul>
    <!-- /商品列表 -->

    <!-- 隐藏搜索框 -->
    <div class="search-part-wrap" :class="{'active': isSearch}">
      <div class="serach-wrap">
        <div class="search flex-row" >
          <icon type="search"></icon>
          <input class="search-input" ref="searchInput" type="text" placeholder="输入你要卖的手机">
          <span class="search-cancel" @click="searchCancel">取消</span>
        </div>
      </div>
      <div class="search-list flex-row">
        <h3>热门搜索</h3>
        <span class="search-tag" v-for="tag in tags" :key="tag.id">{{tag.name}}</span>
      </div>
    </div>
    <!-- /隐藏搜索框 -->
  </div>
</template>

<script>
import { Icon, Swiper, SwiperItem } from "vux";
export default {
  components: {
    Icon,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      //搜索
      isSearch: false,
      tags: [
        {
          id: 1,
          name: "荣耀 V10"
        },
        {
          id: 2,
          name: "iphone X"
        },
        {
          id: 3,
          name: "iphone 7"
        },
        {
          id: 4,
          name: "小米 mix2"
        },
        {
          id: 5,
          name: "三星 Note 8"
        }
      ],

      //轮播
      currentSwiper: 0,
      baseList: [
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/1.jpg",
          title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: "https://static.vux.li/demo/2.jpg",
          title: "送你一辆车"
        },
        {
          url: "javascript:",
          img:
            "https://m.360buyimg.com/mobilecms/s1125x549_jfs/t12847/239/936387996/187401/dd1863a/5a178b84Nf8c2b776.jpg!q70.jpg",
          title: "送你一次旅行",
          fallbackImg: "https://static.vux.li/demo/3.jpg"
        }
      ],

      //商品
      phoneList: [
        {
          id: 1,
          url:
            "https://static.aihuishou.com/image?file=58f9cd88aa988bac36000005&w=134&h=134",
          name: "iphone 6",
          price: 2000
        },
        {
          id: 2,
          url:
            "https://static.aihuishou.com/image?file=58f9cd88aa988bac36000005&w=134&h=134",
          name: "iphone 7",
          price: 2000
        },
        {
          id: 3,
          url:
            "https://static.aihuishou.com/image?file=58f9cd88aa988bac36000005&w=134&h=134",
          name: "iphone 7",
          price: 2000
        }
      ]
    };
  },

  methods: {
    /* 搜索框 */
    openSearchView() {
      this.isSearch = true;
      this.$nextTick(() => {
        this.$refs.searchInput.focus();
      });
    },

    searchCancel() {
      this.isSearch = false;
    }
    /* 搜索框 */
  }
};
</script>


