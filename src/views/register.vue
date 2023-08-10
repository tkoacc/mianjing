<template>
  <div class="register-page">
    <!-- 顶部栏 -->
    <van-nav-bar title="面经注册" />
    <!-- 表单 -->
    <van-form>
      <van-field
        name="用户名"
        label="用户名："
        placeholder="请输入用户名"
      ></van-field>
      <van-field
        name="密码"
        label="密码："
        placeholder="请输入密码"
      ></van-field>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <!-- 跳转按钮 -->
    <a class="link" href="#">直接登录</a>
  </div>
</template>

<script>
export default {
  name: 'register-page',
  data () {
    return {}
  },
  methods: {}
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
