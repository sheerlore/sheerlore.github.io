<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

type Todo = {
  id: number,
  text: string,
  done: boolean,
}

let id = 0

const hElementRef = ref<HTMLHeadingElement | null>(null)
const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref<Todo[]>([
  { id: id++, text: 'Learn HTML', done: false },
  { id: id++, text: 'Learn JavaScript', done: false },
  { id: id++, text: 'Learn Vue', done: false },
])
const filteredTodos = computed<Todo[]>(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

onMounted(() => {
  if (hElementRef.value == null) return
  hElementRef.value.textContent = 'Mounted!'
})

function addTodo() {
  if (newTodo.value.trim() === '') return;
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <h2 ref="hElementRef">TODO</h2>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Show all" : "Hide completed" }}
  </button>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
