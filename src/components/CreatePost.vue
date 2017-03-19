<template>
  <div>
    <Row type="flex" justify="center">
        <i-col span="6">
          <h1>Post an experience</h1>
        </i-col>
    </Row>

    <Row>
      <i-col span="12" align="right">
        <div>
          <Spin v-show="mapLoading" size="large"></Spin>
          <gmap-map
            :center="currentPosition"
            :zoom="16"
            map-type-id="roadmap"
            style="width: 500px; height: 300px">
            <gmap-marker
              :position="currentPosition"
              :clickable="true"
              :draggable="true"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
        </div>

      </i-col>

      <i-col span="6" align="left" class="margin-left">
        <i-form :model="locationForm">
          <Form-item>
            <i-input v-model="locationForm.city" placeholder="City"></i-input>
          </Form-item>
          <Form-item>
            <i-input v-model="locationForm.zip" placeholder="Zip"></i-input>
          </Form-item>
          <Form-item>
            <i-input v-model="locationForm.street" placeholder="Street"></i-input>
          </Form-item>
          <i-button type="primary" shape="circle" icon="location" @click="getCurrentPosition"></i-button>
        </i-form>
      </i-col>
    </Row>

    <Row type="flex" justify="left" class="margin-top margin-bottom">
      <i-col span="13" offset="5">
        <i-form :model="createForm">
          <Form-item>
            <i-input v-model="createForm.title" placeholer="title"></i-input>
          </Form-item>
          <Form-item>
            <i-input v-model="createForm.description" type="textarea" placeholder="description..."></i-input>
          </Form-item>

          <i-col span="4" align="left">
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <i-button type="ghost" icon="ios-cloud-upload-outline">image</i-button>
            </Upload>
          </i-col>

          <i-col span="4" align="left">
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <i-button type="ghost" icon="ios-cloud-upload-outline">video</i-button>
            </Upload>
          </i-col>
          <Form-item>
            <i-input v-model="createForm.title" placeholer="title"></i-input>
          </Form-item>

          <i-button type="primary" @click="createProfile">Submit</i-button>
        </i-form>

      </i-col>
    </Row>

  </div>

</template>
<style>
  gmap-map {
    position: relative;
    display: block;
  }
  .margin-top {
    margin-top: 2em;
  }

  .margin-bottom {
    margin-bottom: 2em;
  }
</style>
<script>
  import apiService from '../services/api.service';
    export default {
      data() {
        return {
          locationForm: {},
          createForm: {},
          currentPosition: {lat: 47.4321575, lng: 9.3733733},
          mapLoading: false
        }
      },
      methods: {
          createProfile() {
              let obj = this.createForm;
              obj['Location'] = this.locationForm;
              obj['Profile'] =   {
                "firstName": "someFirstName",
                "lastName": "someLastName",
                "email": "test@user.com",
                "points": 300,
                "popularity": 0.8,
                "pictureUrl": "//placeholde.it/100x100"
              };

              apiService.post(obj, 'posts').then(response => {

              });
              console.log(obj);
          },

        getCurrentPosition() {
          this.mapLoading = true;
          navigator.geolocation.getCurrentPosition((position) => {
              console.log(position);
              this.currentPosition.lat = position.coords.latitude;
              this.currentPosition.lng = position.coords.longitude;
              this.mapLoading = false;
          });
        }
      }
    }
</script>
