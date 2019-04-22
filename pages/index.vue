<template>
  <section class="container">
    <mt-header fixed title="固定在顶部">
      <mt-button slot="right" icon="search" @click="$router.push('/search')"></mt-button>
    </mt-header>
  </section>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      flag: false
    }
  },
  watch: {
    selected: function (val, oldVal) {
      global.console.log(val)
    }
  },
  methods: {
    tanchuang() {
      this.flag = true
      Toast({
        message: '大家好',
        iconClass: 'icon icon-success',
        position: 'bottom',
        duration: 5000
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
.container {
  background: #fff;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
