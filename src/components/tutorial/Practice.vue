<script setup lang="ts">
import { reactive, ref } from 'vue';

const counter = reactive({ count: 0 })
const message = ref('Hello World!')
const titleClass = ref('title')
const text = ref('')
const awesome = ref(true)

function increment() {
  counter.count++
}

function onInput(event: Event) {
  if (!(event.target instanceof HTMLInputElement)) return;
  text.value = event.target.value
}

function toggle() {
  awesome.value = !awesome.value
}
</script>


<template>
  <div>
    <h1 :class="titleClass">{{ message.split('').reverse().join('') }}</h1>
    <p>Count is: {{ counter.count }}</p>
    <button @click="increment">CLICK</button>
    <br>
    <input type="text" :value="text" @input="onInput" placeholder="Type here">
    <input type="text" v-model="text" placeholder="Type here">
    <p>text: {{ text }}</p>
    <div>
      <button @click="toggle">TOGGLE</button>
      <p v-if="awesome">Vue is awesome!</p>
      <p v-else>Oh no 😀</p>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
