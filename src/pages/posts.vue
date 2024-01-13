<template>
  <div>
    <post :key="one.id" @click.right.prevent="out(one.id)" v-for="one of posts" :info="one"></post>
  </div>
</template>

<script setup>
import post from './post.vue'
import { ref, reactive } from 'vue';

const posts = ref([0])
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res = res.json()).then(res => posts.value = res)
function out(one){
  posts.value = posts.value.filter(item => item.id != one)
  
}
</script>

<style>

</style>