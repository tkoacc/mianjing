<template>
  <div class="login-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="面经登录" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名："
        placeholder="请输入用户名"
        :rules="[
          { required, message: '请填写用户名' },
          { pattern, message: '用户名6-15位' }
        ]"
      ></van-field>
      <van-field
        type="password"
        v-model="password"
        name="password"
        label="密码："
        placeholder="请输入密码"
        :rules="[
          { required, message: '请填写密码' },
          { pattern, message: '密码6-15位' }
        ]"
      ></van-field>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- 跳转按钮 -->
    <a class="link" href="#/register">注册账号</a>
  </div>
</template>

<script>
import { UserLogin } from '@/api/user.js'
import { setToken } from '@/utils/storage.js'
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: '',
      required: true,
      pattern: /^\w{6,15}$/
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      // 发送Ajax请求
      const res = await UserLogin(values)
      console.log(res)
      setToken(res.data.data.token)
      // 提示+跳转
      this.$toast.success('登录成功')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
</style>
