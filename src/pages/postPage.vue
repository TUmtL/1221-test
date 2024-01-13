<template>
  <div>
    <div class="about">
      {{ info.post.title }}
      {{ info.post.body }}
      about author
      <p>{{ info.aboutAuthor.name }}</p>
      <p>{{  info.aboutAuthor.email}}</p>
      <p>{{ info.aboutAuthor.phone}}</p>
      <a target="_blank" :href="'https://' + info.aboutAuthor.website">{{info.aboutAuthor.website}}</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useRoute } from 'vue-router'
const info = ref({post:'' , aboutAuthor:''})

// fetch('https://jsonplaceholder.typicode.com/posts/' + useRoute().params.id).then(res => res = res.json()).then(res => info.value.post = res).then(() => fetch(`https://jsonplaceholder.typicode.com/users/${info.value.post.userId}`).then(res=> res = res.json()).then(res => info.value.aboutAuthor = res))
async function red(){
  const raw = await fetch('https://jsonplaceholder.typicode.com/posts/' + useRoute().params.id)
  const cooked = await raw.json()
  info.value.post = cooked 
  const rawD = await fetch(`https://jsonplaceholder.typicode.com/users/${info.value.post.userId}`)
  const cookedD = await rawD.json()
  info.value.aboutAuthor = cookedD
}
red()
</script>

<style>

</style>