<template>

   <div style="background:#eee;padding: 20px">
        <Card v-for="" :bordered="false">
            <h3 slot="title">Post Title</h3>
            <img src="" />
            <span class="user"><Icon type="person"></Icon> Username</span><br>
            <span class="location"><Icon type="location"></Icon> New York City, Downtown, USA</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Rate v-model="value"></Rate>
            <i-button type="ghost" icon="share">Share</i-button>
            <i-button type="primary" icon="android-compass" size="large">Please thake me there!</i-button>
            <h4>Show Comments</h4>


        </Card>
    </div>
</template>
<script>
    import apiService from "../services/api.service"

    export default {
        data() {
            return{
                value: 3,
                // data: loadedData
            }
        },
        created() {
            apiService.get("posts").then(response => {
                 // var loadedData = response.body;
                console.log(response.body);
            })
        }
    }
</script>
