<script setup>
</script>

<template>
<div class="index-page-body">
  <main id="index-main">
    <div class="logo" style="width: 250px; height: 100px;">
      <svg viewBox="0 0 100 50">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">AwAjie</text>
        </symbol>  
        <use xlink:href="#s-text" class="text"></use>
      </svg>
    </div>
    <p>
      这里是顶呱呱的阿杰[awajie或者awesomeajie]<br>
      <s>喜欢唱跳rap，打篮球</s> 喜欢看有兽焉，崽子叫小杰哦！<br>
      愿大家聚如一团火，散若满天星。
    </p>
    <div class="h1">好看的</div>
    <div style="margin: 10px 5px;">
      <a href="https://youshou.wiki/" class="good-looking">
        <div>
          <img src="https://youshou.wiki/images/0/0c/Touch-icon.png" alt="有兽档案馆">
        </div>
        <div class="good-looking-text">有兽档案馆</div>
      </a>
    </div>
    <div class="h1">帮助文档</div>
    <div id="index-container" class="container">
      <router-link to="/xjie-calc24">
        <div class="nonebot-plugin">
          <span>nonebot-plugin-calc24</span>
        </div>
      </router-link>
      <router-link to="/xjie-weather">
        <div class="nonebot-plugin">
          <span>nonebot-plugin-xjie-weather</span>
        </div>
      </router-link>
    </div>

    <!-- 轮播图 -->
    <!-- 先这样后面再改--懒 -->
    <div style="margin-top: 50px;">
      <h1 class="h1">不知道干什么的</h1>
      <div class="Carousel" style="--t: 20s">
        <div>
          <span>awesomeajie</span>
          <span>小杰</span>
          <span>有兽档案馆</span>
          <span>柏葉</span>
          <span>小杰和風</span>
          <span>awajie</span>
          <span>两啤战神</span>
          <span>有兽焉</span>
          <span>awa</span>
          <span>不知道写什么</span>
          <span>顶呱呱的阿杰</span>
        </div>
        <div>
          <span>awesomeajie</span>
          <span>小杰</span>
          <span>有兽档案馆</span>
          <span>柏葉</span>
          <span>小杰和風</span>
          <span>awajie</span>
          <span>两啤战神</span>
          <span>有兽焉</span>
          <span>awa</span>
          <span>不知道写什么</span>
          <span>顶呱呱的阿杰</span>
        </div>
      </div>
      <div class="Carousel" style="--t: 50s">
        <div>
          <span>awesomeajie</span>
          <span>小杰</span>
          <span>有兽档案馆</span>
          <span>柏葉</span>
          <span>小杰和風</span>
          <span>awajie</span>
          <span>两啤战神</span>
          <span>有兽焉</span>
          <span>awa</span>
          <span>不知道写什么</span>
          <span>顶呱呱的阿杰</span>
        </div>
        <div>
          <span>awesomeajie</span>
          <span>小杰</span>
          <span>有兽档案馆</span>
          <span>柏葉</span>
          <span>小杰和風</span>
          <span>awajie</span>
          <span>两啤战神</span>
          <span>有兽焉</span>
          <span>awa</span>
          <span>不知道写什么</span>
          <span>顶呱呱的阿杰</span>
        </div>
      </div>
      <div class="Carousel" style="--t: 30s">
        <div>
          <span>awesomeajie</span>
          <span>小杰</span>
          <span>有兽档案馆</span>
          <span>柏葉</span>
          <span>小杰和風</span>
          <span>awajie</span>
          <span>两啤战神</span>
          <span>有兽焉</span>
          <span>awa</span>
          <span>不知道写什么</span>
          <span>顶呱呱的阿杰</span>
        </div>
        <div>
          <span>awesomeajie</span>
          <span>小杰</span>
          <span>有兽档案馆</span>
          <span>柏葉</span>
          <span>小杰和風</span>
          <span>awajie</span>
          <span>两啤战神</span>
          <span>有兽焉</span>
          <span>awa</span>
          <span>不知道写什么</span>
          <span>顶呱呱的阿杰</span>
        </div>
      </div>
    </div>
  </main>
</div>

</template>

<style>
.index-page-body {
  width: 100%;
  margin: 0 auto;
  max-width: 1500px;
  display: flex;
  flex: 1;
}
#index-main {
  flex: auto;
  padding: 10px;
  min-height: 500px;
  margin: 150px 30px 0;
  border-radius: 10px;
  background-color: var(--index-main-bg-c);
  overflow: hidden;
}
.container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;

}
.nonebot-plugin {
  padding: 10px;
  margin: 10px 5px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  background-color: rgba(255, 245, 245, 0.5);
}
.logo {
  display: flex;
  font: 25px/1 "almmInter";
  font-weight: bold;
	text-transform: uppercase;
}
.text {
	  fill: none;
	  stroke-width: 1;
	  stroke-dasharray: 0 180;
	  stroke-dashoffset: 0;
	  stroke: var(--dynamic-svg-logo);
	  animation: stroke 3s cubic-bezier(0.135, 0.590, 0.595, 0.990) forwards;  
	}
	@keyframes stroke {
	  100% {
	    stroke-dashoffset: 200;
	    stroke-dasharray: 200 0;
	  }
	}

.good-looking {
  width: fit-content;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 245, 245, 0.3);
  border-radius: 20px;
  background-color: rgba(255, 245, 245, 0.3);
}
.good-looking img {
  width: 40px;
}
.good-looking-text {
  margin: 0 10px;
}

/* 轮播图 */
.Carousel {
  display: flex;
  width: min(100%, 1000px);
  margin: 0 auto;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%,transparent);
}
.Carousel div {
  white-space: nowrap;
  animation: animate var(--t) linear infinite;
}
.Carousel div:nth-child(2) {
  animation: animate2 var(--t) linear infinite;
  animation-delay: calc(var(--t) / -2);
}
.Carousel div span {
  display: inline-flex;
  margin: 10px;
  letter-spacing: .2em;
  background-color: var(--Carousel-span-bgcolor);
  /* color: #fff; */
  padding: 5px 10px;
  border-radius: 5px;
}
@keyframes animate {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(-100%);
  }
}
@keyframes animate2 {
  from {
    transform: translate(0);
  }
  to {
    transform: translate(-200%);
  }
}

@media screen and (max-width: 640px) {
  #index-main {
    margin: 150px 15px 0;
  }
}
</style>