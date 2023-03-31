<!--
 * @Date: 2023-03-30 14:24:31
 * @LastEditors: lilith.wang lilith.wang@wayz.ai
-->
<!--
 * @Date: 2023-03-29 17:04:02
 * @LastEditors: lilith.wang lilith.wang@wayz.ai
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Viewer from './initView'

let viewer: any;

onMounted(async () => {
    viewer = await new Viewer(document.getElementById('CesiumContainer') as HTMLElement)
})
</script>

<template>
    <div id="CesiumContainer" />
</template>

<style scoped lang="less">
#CesiumContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 0;
}
</style>
