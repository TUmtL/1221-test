<template>
  <div>
    <router-link class="post" :to="`/home/post/${info.id}`">
    <p>{{ info.title }}</p> 
    <p>{{ info.body }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
defineProps(["info"]);
</script>

<style>
.post p {
  margin: 0;

}
.post{
  display: inline-block;
  color: gray;
  text-align: start;
  padding: 5px;
  border: 1px solid black;
  margin: 12px 0;
  text-decoration: none;
}
</style>