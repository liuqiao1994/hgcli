<!-- home -->
<template>
  <div class="about-container">
    <div class="warpper">
      <div class="list">
        <div class="logo"></div>
        <div class="demo-home__title">VUE H5开发模板</div>
        <div class="wechat">
          <img :src="this.$cdn+'/userfiles/1/images/acti/ptActivityDetail/2021/07/new.jpg'" alt="" />
        </div>
        <div class="item">
          {{ userName }}
          <van-button v-if="userName == ''" type="warning" size="small" @click="doDispatch">快点我~</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo, getUserName } from '@/api/example.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      imgurl: `${this.$cdn}/userfiles/1/images/acti/ptActivityDetail/2021/07/new.jpg`
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 请求数据案例
    async initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => { })
        .catch(() => { })
      // const res1 = await getUserInfo(params)
      // const res2 = await getUserName(params)
    },
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', '然后呢')
    }
  }
}
</script>
<style lang="scss">
.about-container {
  /* 你的命名空间 */
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
  .warpper {
    padding: 50px 12px 12px 12px;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      font-size: 14px;
      .demo-home__title {
        margin: 0 0 6px;
        font-size: 32px;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .item {
        font-size: 14px;
        line-height: 34px;
        a {
          text-decoration: underline;
        }
        .van-button {
          /* vant-ui 元素*/
          background: #ff5500;
        }
      }

      .logo {
        width: 120px;
        height: 120px;
        background: url($cdn+'/weapp/logo.png') center / contain no-repeat;
      }
      .wechat {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
