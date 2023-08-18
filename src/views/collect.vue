<template>
  <div class="collect-page">
    <van-nav-bar fixed title="我的收藏" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem v-for="item in list" :key="item.id" :item="item" />
    </van-list>
  </div>
</template>

<script>
import { getArticlesCollect } from '@/api/article'
export default {
  name: 'collect-page',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    async onLoad () {
      // 发送Ajax请求
      const { data } = await getArticlesCollect({
        page: this.page
      })
      console.log(data)
      // 添加数组数据
      this.list.push(...data.rows)
      // 完成加载
      this.loading = false
      // 判断数据是否加载完毕，如果接口没有数据返回，默认返回空数组
      if (this.page === data.pageTotal || data.rows.length === 0) {
        this.finished = true
      } else {
        this.page++
      }
    }
  }
}
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
  margin-top: 44px;
}
</style>
