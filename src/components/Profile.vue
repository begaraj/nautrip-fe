<template>
  <div>

    <Row type="flex" justify="center" align="middle">
        <i-col span="2">
            <div class="image">
                <img src="//placehold.it/100x100" alt="">
            </div>
        </i-col>
        <i-col span="3">
          <h1>Username</h1>
          <a href="#">share my profile</a>
          <br>
          <a href="#">edit my detailed informations</a>
        </i-col>
    </Row>

    <Row type="flex" justify="center">
      <i-col span="7">
        <gmap-map
          :center="{lat:10, lng:10}"
          :zoom="7"
          map-type-id="roadmap"
          style="width: 100%; height: 300px">
        </gmap-map>
      </i-col>
      <i-col span="9" align="left">
        <div class="margin-left">
          <h3>My points: 400</h3> <!--TODO: fetch points from DB, add icon -->
          <chartjs-line
          :labels="['november', 'december', 'january','february','march', 'april']"
          :data="[8,10,20,14,20, 24]" :width="400" :height="200"
          :datalabel="'Popularity'"
          :fill="true"></chartjs-line>
        </div>
      </i-col>
    </Row>

  </div>
</template>
<style>
  .image img{
    border-radius: 50%;
  }

  .margin-left {
    padding-left: 2em;
  }

</style>
<script>
import VueCharts from 'hchs-vue-charts';
    export default {

    }
</script>
