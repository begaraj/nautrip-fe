<template>
  <div class="center">
  <Row>
       <i-col span="8">

       <i-form :model="formItem" :label-width="80">
        <Form-item>
            <i-input v-model="formItem.firstName" placeholder="First name"></i-input>
        </Form-item>
        <Form-item>
            <i-input v-model="formItem.lastName" placeholder="Last name"></i-input>
        </Form-item>
        <Form-item>
            <i-input v-model="formItem.username" placeholder="Username"></i-input>
        </Form-item>
        <Form-item>
            <i-input v-model="formItem.email" placeholder="Email"></i-input>
        </Form-item>
        <Form-item>
            <i-input v-model="formItem.location" placeholder="Location"></i-input>
        </Form-item>
        <Form-item>
            <i-select v-model="formItem.payment" placeholder="Choose payment method">
                <i-option value="Credit Card">Credit Card</i-option>
                <i-option value="PayPal">PayPal</i-option>
                <i-option value="SOFORT">SOFORT</i-option>
            </i-select>
        </Form-item>

        <Form-item>
            <i-button type="primary" @click="signIn">Sign in</i-button>
            <i-button type="ghost" style="margin-left: 8px">Cancel</i-button>
        </Form-item>
    </i-form>

    </i-col>
  </Row>
</div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {}
            }
        },
        methods: {
          signIn() {
            console.log(this.formItem);
            console.log(this.api);
            //$this.http.get()
          }
        }
    }
</script>
