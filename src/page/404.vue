<script>
export default {
  name: "Errorpage",
  data() {
    return {
      countDown: 5,
      intervalID: null,
    };
  },
  methods: {
    ErrorpageJump() {
      let _this = this;
      this.intervalID = setInterval(function () {
        _this.countDown--;
        if (_this.countDown <= 0) {
          location = "./";
        }
      }, 1000);
    },
  },
  mounted() {
    this.ErrorpageJump();
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.intervalID);
    next();
  },
};
</script>

<template>
  <div class="page-body">
    <main>
      <div class="errorpage">
        <p>您访问的页面不存在，请查看网络连接是否正常，或查看地址输入是否正确!</p>
        <div class="errorpage-jump">
          <router-link to="./" class="errorpage-manual-jump">点我回首页</router-link>
          <span style="margin: 0 5px">或</span>
          <div>
            <span id="jump-to-home">{{ countDown }}</span>
            <span>秒后自动跳转</span>
          </div>
        </div>
      </div>
    </main>
  </div>

</template>

<style scoped>
.errorpage {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.errorpage-jump {
  display: flex;
  justify-content: center;
  font-size: 15px;
}
.errorpage-manual-jump {
  border-bottom: 2px solid black;
}
</style>