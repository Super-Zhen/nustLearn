<template>
  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="0" @click.native.prevent="goPage('/')">
      <div class="icon iconfont icon-ziyuan69 font40"></div>
      <div class="font16">
        外卖
      </div>
    </mt-tab-item>
    <mt-tab-item id="1" @click.native.prevent="goPage('./discover')">
      <div class="icon iconfont icon-ziyuan8 font40"></div>
      <div class="font16">
        订单
      </div>
    </mt-tab-item>
    <mt-tab-item id="2" @click.native.prevent="goPage('./about')">
      <div class="icon iconfont icon-ziyuan28 font40"></div>
      <div class="font16">
        发现
      </div>
    </mt-tab-item>
    <mt-tab-item id="3" @click.native.prevent="goPage('./user')">
      <div class="icon iconfont icon-ziyuan13 font40"></div>
      <div class="font16">
        我的
      </div>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    page: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      selected: 'tab-container1',
      active: 'tab-container1'
    }
  },
  watch: {
    selected: function (val) {
      global.console.log(val)
    }
  },
  created() {
    this.selected = this.page
  },
  methods: {
    goPage(url) {
      global.console.log(11)
      this.$router.replace(url)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  .mint-tabbar > .mint-tab-item.is-selected{
    color: red;
  }
  a:hover{
    text-decoration: none
  }
  .font40{
    font-size:26px;
    margin-bottom: px2rem(6px);
  }
  .font16{
    font-size: 16px;
  }
</style>
