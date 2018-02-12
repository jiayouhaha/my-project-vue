<template>
  <div class="station-item" data-discount-type="" data-discount-desc="" data-name="武汉测试加油站" data-id="11" data-lon="114.328" data-lat="30.586">
    <div class="station-detail">
      <div class="left-box">
        <div class="name-box">
          <div class="station-name">{{stationInfo.name}}</div>
        </div>
        <div class="station-address">{{stationInfo.location}}</div>
      </div>
      <div class="right-box">
        <a href="http://apis.map.qq.com/uri/v1/routeplan?type=drive&amp;fromcoord=30.575388756810085,114.30963859310197&amp;to=湖北省武汉市武昌区水果湖街道办事处汉街总部国际A座&amp;policy=1&amp;referer=myapp">
          <div class="distance">2.12km</div>
        </a>
      </div>
    </div>
    <div class="station-section">
      <div class="section-item left">
        <span class="pay-img"></span>
        <span>支付</span>
      </div>
      <div class="section-item right">
        <a href="http://apis.map.qq.com/uri/v1/routeplan?type=drive&amp;fromcoord=30.575388756810085,114.30963859310197&amp;to=湖北省武汉市武昌区水果湖街道办事处汉街总部国际A座&amp;policy=1&amp;referer=myapp">
          <span class="iconfont icon-daohang"></span>
          <span>导航</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["stationInfo"], // 父亲传 谁用谁接受（儿子接受）
  data:function(){
    return{

    }
  },
  methods:{
//    jia:function(){
//      console.log(this.data);
//      this.data.a++；
//    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "~@/assets/style/sass/gas-station.sass";
</style>
