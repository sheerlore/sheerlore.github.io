<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  text: {
    type: String,
    default: 'No Text',
  },
  size: {
    type: String as PropType<'h1' | 'h2' | 'h3'>,
    default: 'h1'
  }
})
</script>

<template>
  <h1 v-if="size === 'h1'">{{ text }}</h1>
  <h2 v-if="size === 'h2'">{{ text }}</h2>
  <h3 v-if="size === 'h3'">{{ text }}</h3>
</template>
