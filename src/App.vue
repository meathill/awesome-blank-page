<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import axios from 'axios';
import { onBeforeMount } from 'vue';
export default {
  setup() {
    onBeforeMount(async() => {
      const result = await axios.get('/wallpaper/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US');
      console.log(result);
    });
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
