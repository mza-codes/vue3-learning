<script setup lang="ts">
import { onMounted, ref } from "vue";
import InputBox from "./InputBox.vue";
import { genColor } from "../utils";

const text = ref("");
const error = ref("");
const todos = ref<string[]>([]);

const color = genColor();

function addTodo(): void {
    console.log("add todo call", text, todos);

    if (text.value.length <= 5) {
        error.value = "Todo must be at least 5 characters!";
        return;
    }
    todos.value.push(text.value);
    text.value = "";
    error.value = "";
}

onMounted(() => {
    const value = JSON.parse(localStorage.getItem("vue-todo") ?? "[]");
    console.log("onMount set value", value);
    todos.value = value;
});
</script>

<template>
    <ul class="p-4 space-y-2">
        <li
            :style="{ backgroundColor: color }"
            class="font-semibold bg-opacity-20 hover:bg-opacity-40 rounded-md p-2 capitalize"
            v-for="todo in todos"
            :key="todo"
        >
            {{ todo }}
        </li>
    </ul>
    <form @submit.prevent="addTodo" class="row gap-2 items-center">
        <InputBox label="Todo" :error="error" v-model.trim="text" />
        <button type="submit" class="btn btn-secondary">Add</button>
    </form>
</template>

<!-- <input
            required
            minlength="4"
            placeholder="Enter a Todo"
            type="text"
            class="input input-bordered input-sm max-w-xs"
            v-model.trim="text"
        /> -->
