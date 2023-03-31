<!--
 * @Date: 2023-03-29 17:04:02
 * @LastEditors: lilith.wang lilith.wang@wayz.ai
-->
<script setup lang="ts">
import mapViewVue from './mapView.vue'

const handleChange = () => {

}
</script>

<template>
  <div class='headbox'>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-button @click="handleChange">业务数据可视化</el-button>
      </el-col>
      <el-col :span="6">
        <el-button @click="handleChange">社区治理</el-button>
      </el-col>
      <el-col :span="6">
        <el-button @click="handleChange">灾害应急</el-button>
      </el-col>
      <el-col :span="6">
        <el-button @click="handleChange">三维城市底座</el-button>
      </el-col>
    </el-row>
  </div>
  <div class='map'>
    <mapViewVue />
  </div>
</template>

<style scoped lang="less">
.headbox {
  height: 10%;
  z-index: 999;
  position: absolute;
  width: 100%;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  .el-row {
    width: 80%;
    margin: auto;
    .el-row {
      text-align: center;
    }
  }
}
</style>
