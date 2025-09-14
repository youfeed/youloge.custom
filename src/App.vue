
<template>
  <div class="container">
    <h1>Youloge web Components</h1>
    <div value="hello world">
      <div>
        <div>youloge-world 组件</div>
        <youloge-world>2333</youloge-world>
        <youloge-world>2333</youloge-world>
      </div>
      <div>
        <div>youloge-map 组件 <button @click="changeMap">切换地图</button></div>
        <youloge-map :data-lat="map.lat" :data-lng="map.lng" :data-zoom="map.zoom"></youloge-map>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive,toRefs } from 'vue';

const state = reactive({
  map:{
    lat: 39.9042,
    lng: 116.4074,
    zoom: 12,
  }
}),{map} = toRefs(state);

const changeMap = () => {
  state.map = {
    lat: 22.3346688,
    lng: 114.2030336,
    zoom: 16,
  }
}


</script>
<style>
.container{
  max-width: 778px;
  margin: 0 auto;
  padding: 20px;
}
</style>
