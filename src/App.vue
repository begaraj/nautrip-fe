<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <Menu mode="horizontal" :theme="theme1" active-key="1" style="width:100%; text-align:center; display:block;"> 
        <Menu-item key="1" >
            <Icon size="20" type="android-more-vertical"></Icon>
            My Timeline
        </Menu-item>
        <Menu-item key="2">
            <Icon size="20" type="ios-people"></Icon>
            Travelers
        </Menu-item>
        <Menu-item key="3">
            <Icon size="20" type="arrow-graph-up-right"></Icon>
            Trending Travels
        </Menu-item>
        <Menu-item key="4">
            <Icon size="20" type="map"></Icon>
            Nearby
        </Menu-item>
        <Menu-item key="5">
            <Icon size="20" type="person"></Icon>
            My Profile
        </Menu-item>
    </Menu>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
            return {
                theme1: 'primary'
            }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
  float:none!important; display: inline-block;
}
</style>
