<style scoped>

</style>

<template>
  <div class="flex-bug">
      <search @click.native="goToSearchView">
      </search>
  </div>
</template>

<script>
import { Search } from "vux";
export default {
  components: {
    Search
  },
  data() {
    return {
    };
  },
  methods: {
    /* 搜索框 */
    goToSearchView(){
      window.alert(1)
    }
    /* 搜索框 */
  }
};
</script>


