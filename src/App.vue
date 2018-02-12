<template>
  <div id="app-container">
    <div id="menu-wrapper">
      <ul class="menu-tabs">
        <li class="tab-item"
            v-for="(item,index) in items"
            @click="selected(index)">
          <router-link :to="item.href" tag="a" active-class="selected">
            <span :class="[item.icon]"></span>
            <label class="item-txt" >{{item.txt}}</label>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <div id="global-tips"><label></label></div>
  </div>

</template>

<script>
  var arr=[
    {
      icon:'home-icon',
      txt:'首页',
      href:'home'
    },
    {
      icon:'gas-icon',
      txt:'加油',
      href:'gas'
    },{
      icon:'car-icon',
      txt:'汽车',
      href:'car'
    },
    {
      icon:'my-icon',
      txt:'我',
      href:'my'
    }
  ];
  export default {
    name: 'App',
    data: function () {
      return {
        items:arr,
      }
    },
    methods: {
      selected: function(index) {
        console.log(index);
      }
    }
}
</script>

<style>
@import "./assets/style/base.css";
@import "./assets/style/iconfont/iconfont.css";
@import "./assets/style/menu.css";
#menu-wrapper{
  height: 50px;
  background-color: #fff;
  margin: 0 auto;
  max-width: 700px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  opacity: 1;
  display: inline-block;
  border-top:1px solid #dfdfdf;
}
</style>
