<template>
  <div class="article-page">
    <nav class="my-nav van-hairline--bottom">
      <a
        :class="{ active: sorter === 'weight_desc' }"
        @click="hChange('weight_desc')"
        href="javascript:;"
        >推荐</a
      >
      <a
        :class="{ active: sorter === null }"
        @click="hChange(null)"
        href="javascript:;"
        >最新</a
      >
      <div class="logo"><img src="@/assets/logo.png" alt="" /></div>
    </nav>
    <!-- 长列表：上拉加载更多 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem
        v-for="item in list"
        :key="item.id"
        :item="item"
      ></ArticleItem>
    </van-list>
  </div>
</template>

<script>
// 导入接口
import { getArticleList } from '@/api/article.js'
export default {
  name: 'article-page',
  data () {
    return {
      // 当前页
      current: 1,
      // 每页数量
      pageSize: 10,
      // 排序规则
      sorter: 'weight_desc',
      // 文章列表
      list: [],
      // 加载更多动画
      loading: false,
      // 是否全部加载完毕
      finished: false
    }
  },
  methods: {
    // 加载更多
    async onLoad () {
      // 请求列表
      const data = await getArticleList({
        current: this.current,
        pageSize: this.pageSize,
        sorter: this.sorter
      })
      console.log(data)
      // 加载更多，添加到数组后面
      this.list.push(...data.data.rows)
      // 页码自增
      this.current++
      // 设置loading为false，关闭动画，否则底部一直转圈
      this.loading = false
      // 判断是否全部加载完毕,如果加载完毕，设置finished为true
      if (data.data.rows.length === 0) {
        this.finished = true
      }
    },
    hChange (sorter) {
      // 点击切换获取sorter
      console.log(sorter)
      // 重置所有的数据
      this.sorter = sorter
      this.current = 1
      this.list = []
      this.finished = false
      // loading状态是true,因为此刻正在发送请求
      this.loading = true
      // 发请求
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
