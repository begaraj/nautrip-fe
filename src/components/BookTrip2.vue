<template>
  <div>

    <Steps :current="1">
      <Step title="Choose your plan" content="date and traveling method"></Step>
      <Step title="Adjust" content="adjust your plan"></Step>
      <Step title="Choose option" content="choose a option provided by us"></Step>
      <Step title="Finish" content="You are ready to go!"></Step>
    </Steps>
    <br>
    <br>
    <br>
    <br>


    <Row type="flex" justify="space-around">
      <i-col><i-button type="primary" shape="circle" size="large" icon="plane">

      </i-button>
        <h3>moving(traveling) by ...</h3>
        <br>
        <Checkbox :checked.sync="single">plane</Checkbox>
        <Checkbox :checked.sync="single">train</Checkbox>
        <Checkbox :checked.sync="single">car</Checkbox>
        <Checkbox :checked.sync="single">bike</Checkbox>
        <br>

        <br>
        <Checkbox :checked.sync="single">plane</Checkbox>
        <Checkbox :checked.sync="single">train</Checkbox>
        <Checkbox :checked.sync="single">car</Checkbox>
        <Checkbox :checked.sync="single">bike</Checkbox>
        <br>

        <br>
        <Checkbox :checked.sync="single">plane</Checkbox>
        <Checkbox :checked.sync="single">train</Checkbox>
        <Checkbox :checked.sync="single">car</Checkbox>
        <Checkbox :checked.sync="single">bike</Checkbox>
        <br>
      </i-col>
      <i-col><i-button type="primary" shape="circle" size="large" icon="ios-home">

      </i-button>
        <h3>housing at ...</h3>
        <br>
        <Checkbox :checked.sync="single">hotel</Checkbox>
        <Checkbox :checked.sync="single">hostel</Checkbox>
        <Checkbox :checked.sync="single">air bnb</Checkbox>
        <Checkbox :checked.sync="single">camping</Checkbox>
        <br>

        <br>
        <Checkbox :checked.sync="single">outside</Checkbox>
        <Checkbox :checked.sync="single">rent a house</Checkbox>
        <Checkbox :checked.sync="single">car</Checkbox>
        <Checkbox :checked.sync="single">bike</Checkbox>
        <br>

        <br>
        <Checkbox :checked.sync="single">plane</Checkbox>
        <Checkbox :checked.sync="single">train</Checkbox>
        <Checkbox :checked.sync="single">car</Checkbox>
        <Checkbox :checked.sync="single">bike</Checkbox>
        <br>
      </i-col>
      <i-col><i-button type="primary" shape="circle" size="large" icon="android-walk">

      </i-button>
        <h3>activities ...</h3>
        <br>
        <Checkbox :checked.sync="single">sight seeing</Checkbox>
        <Checkbox :checked.sync="single">hicking</Checkbox>
        <Checkbox :checked.sync="single">climping</Checkbox>
        <Checkbox :checked.sync="single">museum</Checkbox>
        <br>

        <br>
        <Checkbox :checked.sync="single">art</Checkbox>
        <Checkbox :checked.sync="single">architecture</Checkbox>
        <Checkbox :checked.sync="single">history</Checkbox>
        <Checkbox :checked.sync="single">sport</Checkbox>
        <br>

        <br>
        <Checkbox :checked.sync="single">relax</Checkbox>
        <Checkbox :checked.sync="single">working</Checkbox>
        <Checkbox :checked.sync="single">coding</Checkbox>
        <Checkbox :checked.sync="single">bike</Checkbox>
        <br>
      </i-col>
    </Row>

    <br>
    <br>
    <br>
    <br>
    <Row>
      <router-link to="/book-trip-3">
        <i-button type="primary" size="large">Next</i-button>
      </router-link>
    </Row>
  </div>
</template>
<script>
  import apiService from "../services/api.service"

  export default {
    data() {
      return{
        value: 3,
        posts: []
      }
    },
    created() {
      apiService.get("posts").then(response => {
        this.posts = response.body;
      })
    }
  }
</script>
