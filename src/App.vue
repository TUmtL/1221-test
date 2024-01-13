<template>
  <div>
    <router-link :to="{name:'home'}">home</router-link> <router-link :to="'/home/post'">posts</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>