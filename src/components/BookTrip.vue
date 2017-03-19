<template>
  <div>

    <Steps :current="0">
      <Step title="Choose your plan" content="date and traveling method"></Step>
      <Step title="Adjust" content="adjust your plan"></Step>
      <Step title="Choose option" content="choose a option provided by us"></Step>
      <Step title="Finish" content="You are ready to go!"></Step>
    </Steps>
    <br>
    <br>
    <br>
  <Row type="flex" justfiy="space-around">
    <i-col span="12">
      <i-button type="primary" size="large">Choose recommended weather</i-button>
    </i-col>
    <i-col span="12">
      <Date-picker type="date" placeholder="start date" style="width: 200px"></Date-picker>
      <br>
      <br>
      <Date-picker type="date" placeholder="end date" style="width: 200px"></Date-picker>
    </i-col>
  </Row>

    <br>
    <br>
    <br>

  <Row type="flex" justify="space-around">
    <i-col><i-button type="primary" shape="circle" size="large">$</i-button></i-col>
    <i-col><i-button type="primary" shape="circle" size="large">$$</i-button></i-col>
    <i-col><i-button type="primary" shape="circle" size="large">$$$</i-button></i-col>
  </Row>
    <br>
    <br>
    <br>
    <br>
    <Row>
      <router-link to="/book-trip-2">
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
