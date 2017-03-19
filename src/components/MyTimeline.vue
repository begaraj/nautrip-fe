<template>

   <div style="background:#eee;padding: 20px">
        <Card v-for="post in posts" :key="post.id" :bordered="false">
            <Carousel>
              <Carousel-item>
                <div class="demo-carousel"><img src="http://placehold.it/350x150" alt=""></div>
              </Carousel-item>
              <Carousel-item>
                <div class="demo-carousel"><img src="http://placehold.it/350x150" alt=""></div>
              </Carousel-item>
              <Carousel-item>
                <div class="demo-carousel"><img src="http://placehold.it/350x150" alt=""></div>
              </Carousel-item>
              <Carousel-item>
                <div class="demo-carousel"><img src="http://placehold.it/350x150" alt=""></div>
              </Carousel-item>
            </Carousel>
            <h3 slot="title">Post Title</h3>
            <img src="" />
            <span class="user"><Icon type="person"></Icon> Username</span><br>
            <span class="location"><Icon type="location"></Icon> New York City, Downtown, USA</span>
            <p>{{post.description}}</p>
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
