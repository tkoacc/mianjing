<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import { UserLogin } from '@/api/user.js'
UserLogin({
  username: 'wuhan',
  password: '123456'
})
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.error('Error occurred:', error)
    // 如果可用，打印服务器返回的错误信息
    if (error.response && error.response.data) {
      console.error('Server response:', error.response.data)
    }
  })
export default {}
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  height: 50px;
}
</style>
