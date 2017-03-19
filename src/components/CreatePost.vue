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
          <gmap-map
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="roadmap"
            style="width: 500px; height: 300px">
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
          <i-button type="primary" shape="circle" icon="location"></i-button>
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
            <i-input v-model="createForm.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="description..."></i-input>
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

          <i-button type="primary">Submit</i-button>
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
    export default {
      data() {
        return {
          locationForm: {},
          createForm: {}
        }

      }
    }
</script>
