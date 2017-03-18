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
      <i-col span="4">
      <gmap-map
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="roadmap"
        style="width: 500px; height: 300px">
      </gmap-map>
      </i-col>
      <i-col span="9">
        <h3>My points: 400</h3> <!--TODO: fetch points from DB, add icon -->
      </i-col>
    </Row>

  </div>
</template>
<style>
  .image img{
    border-radius: 50%;
  }
</style>
<script>
    export default {

    }
</script>
