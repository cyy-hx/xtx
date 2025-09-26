<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="home-container">
    <div class="container">
      <div class="category-banner-wrapper">
        <HomeCategory />
        <HomeBanner />
      </div>
    </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />
    <!-- 测试面板组件 -->
    <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
      <div>
        我是新鲜好物的插槽
      </div>
    </HomePanel>
    <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
      <div>
        我是人气推荐的插槽
      </div>
    </HomePanel>
  </div>
</template>

<style scoped>
.home-container {
  min-height: 100vh;
  overflow: visible;
}

.category-banner-wrapper {
  position: relative;
  height: 500px;
  overflow: visible;
  width: 1240px;
}
</style>
