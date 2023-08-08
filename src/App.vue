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

import request from '@/utils/request.js'

request
  .post('/h5/user/login', {
    username: 'wuhan',
    password: '123456'
  })
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.error('Error during login:', error)
  })

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
