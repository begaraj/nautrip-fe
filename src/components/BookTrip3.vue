<template>
  <div>

    <Steps :current="2">
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
      <h3>Choose the trip that best fits your expectations</h3>
      <Collapse active-key="1" accordion>
        <Panel key="1">
          Option 1 - 1400€ ( or 1200€ + 1000 pts)
          <p slot="content">
            - Direct flight to New York<br>
            - Staing at AirBnb in Brooklyn<br>
            - Trip to Niagara Falls<br>
            - Direct return flight to Munich<br>
          </p>
        </Panel>
        <Panel key="2">
          Option 2 - 2000€ ( or 1500€ + 2000 pts)
          <p slot="content">
            - Direct flight to New York on Lufthansa flight<br>
            - Staing at hotel near Times Square<br>
            - Basketball match at Madison Square Garden<br>
            - Direct return flight to Munich on Lufthansa flight<br>
          </p>
        </Panel>
      </Collapse>
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
