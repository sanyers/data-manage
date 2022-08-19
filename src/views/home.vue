<template>
  <div>
    <div class="test">
      <i class="top-left"></i>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.test {
  background-color: #000;
  width: 200px;
  height: 400px;
  margin: 0 auto;

  .top-left {
    transform: rotate(15deg);
  }
}
</style>
