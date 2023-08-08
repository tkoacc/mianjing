<template>
  <div>
    <h1>Home</h1>
    <van-button class="btn" type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { setToken, getToken, removeToken } from '@/utils/storage.js'
setToken('123')
const res = getToken()
console.log(res)
removeToken()
export default {}
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  height: 50px;
}
</style>
