
<template>
    <row type="flex" justify="center">
        <i-form ref:form-inline :model="formInline" :rules="ruleInline" inline>
            <Form-item prop="user">
                <i-input type="text" :value.sync="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item prop="password">
                <i-input type="password" :value.sync="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" @click="handleSubmit('formInline')">Log in</i-button>
            </Form-item>
        </i-form>
    </row>
</template>
<script>

    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'please enter username', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'pleas enter passwort', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'passwort has to be min 6 characketrs', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('you are logged in!');
                    } else {
                        this.$Message.error('please check your email and password!');
                    }
                })
            }
        }
    }
</script>
