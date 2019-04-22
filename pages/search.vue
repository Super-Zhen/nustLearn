<template>
  <div class="search">
    <mt-header fixed title="固定在顶部">
      <router-link slot="left" to="/">
        <mt-button icon="back">
          返回
        </mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  layout: 'search'
}
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin";
.search {
  padding: 80px 0
}
</style>
