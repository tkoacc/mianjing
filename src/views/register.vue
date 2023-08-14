<template>
  <div class="register-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="面经注册" />
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
          注册
        </van-button>
      </div>
    </van-form>
    <!-- 跳转按钮 -->
    <a class="link" href="#/login">直接登录</a>
  </div>
</template>

<script>
import { UserRegister } from '@/api/user.js'
export default {
  name: 'register-page',
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
      // 发送Ajax请求
      const data = await UserRegister(values)
      console.log(data)
      // 提示+跳转登录页
      this.$toast.success('注册成功')
      this.$router.push('/login')
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
