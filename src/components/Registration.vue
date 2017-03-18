<template>
  <div class="center">
  <Row>
       <i-col span="8">

       <i-form :model="formItem" :label-width="80">
        <Form-item>
            <i-input :value.sync="formItem.input" placeholder="First name"></i-input>
        </Form-item>
        <Form-item>
            <i-input :value.sync="formItem.input" placeholder="Last name"></i-input>
        </Form-item>
        <Form-item>
            <i-input :value.sync="formItem.input" placeholder="Username"></i-input>
        </Form-item>
        <Form-item>
            <i-input :value.sync="formItem.input" placeholder="Email"></i-input>
        </Form-item>
        <Form-item>
            <i-input :value.sync="formItem.input" placeholder="Location"></i-input>
        </Form-item>
        <Form-item>
            <i-select :model.sync="formItem.select" placeholder="Choose payment method">
                <i-option value="Credit Card">Credit Card</i-option>
                <i-option value="PayPal">PayPal</i-option>
                <i-option value="SOFORT">SOFORT</i-option>
            </i-select>
        </Form-item>

        <Form-item>
            <i-button type="primary">Sign in</i-button>
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
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
