<template>
  <div id="app">
    <Menu mode="horizontal" active-key="1">

      <router-link to="/create-post">
        <Menu-item key="1" name="newExperience">
          <Icon type="plus-round"></Icon>
          Create new experience
        </Menu-item>
      </router-link>
      <router-link to="/profile">
        <Menu-item key="2" name="myProfile">
          <Icon size="20" type="person"></Icon>
          My Profile
        </Menu-item>
      </router-link>
    </Menu>

    <router-view class="router-view"></router-view>

    <Menu mode="horizontal" :theme="theme1" active-key="1" style="width:100%; text-align:center; display:block; position:relative; bottom:0;">
        <Menu-item key="1" name="menuItem" >
            <Icon size="20" type="android-more-vertical"></Icon>
            <router-link to="/my-timeline">Recomended</router-link>
        </Menu-item>
        <Menu-item key="2" name="menuItem">
            <Icon size="20" type="ios-people"></Icon>
        </Menu-item>
        <Menu-item key="3" name="menuItem">
            <Icon size="20" type="arrow-graph-up-right"></Icon>
            Trending Travels
        </Menu-item>
        <Menu-item key="4" name="menuItem">
            <Icon size="20" type="map"></Icon>
            Nearby
        </Menu-item>
    </Menu>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
            return {
                theme1: 'primary',
                theme2: 'dark',
                theme3: 'light'
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
}

.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
  float:none!important; display: inline-block;
}

  .router-view {
    margin-top: 2em;
  }
</style>
