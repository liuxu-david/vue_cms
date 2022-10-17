<template>
  <div class="home">
    <hello-world msg="Welcome to Your Vue.js App" />
    <h2>counter:{{ counterStore.count }}</h2>
    <button @click="addNumberClick">+1</button>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { onMounted } from "vue";
import { getUser } from "../services/homeservice.js";

import useCounter from "@/stores/counter";
const counterStore = useCounter();
const addNumberClick = () => {
  counterStore.count++;
};
onMounted(() => {
  getUser().then(() => {
    console.log("成功");
  });
});
</script>
