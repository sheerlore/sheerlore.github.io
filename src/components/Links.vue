<script setup lang="ts">
import { ref } from 'vue';
import { WorkData } from '../utils'

const emit = defineEmits<{
  selectWork: [WorkData]
}>()

import jsonData from '../assets/works.json';
const works = ref(jsonData.data);

function handleClick(work: WorkData) {
  emit("selectWork", work)
}
</script>

<template>
  <ul>
    <li v-for="work in works" :key="work.name" @click="handleClick(work)">
      <a :href="work.url">
        {{ work.name }}
      </a>
    </li>
  </ul>
</template>
