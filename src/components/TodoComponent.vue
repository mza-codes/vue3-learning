<script setup lang="ts">
import { onMounted, ref } from "vue";
import { genColor } from "../utils";
import InputBoxV4 from "./InputBoxV4.vue";

type Todo = { text: string; bg: string };

const text = ref("");
const error = ref("");
const todos = ref<Todo[]>([]);

onMounted(() => {
    const value = JSON.parse(localStorage.getItem("vue-todo") ?? "[]");
    console.log("onMount set value", value);
    todos.value = value;
});

function addTodo(): void {
    if (text.value.trim().length <= 4) {
        error.value = "Todo must be at least 5 characters!";
        return;
    }
    todos.value.push({ text: text.value, bg: genColor() });
    text.value = "";
    error.value = "";
    updateWLocal(todos.value);
}

const updateWLocal = (value: Todo[], reset = false) => {
    console.log("@set in local");
    localStorage.setItem("vue-todo", JSON.stringify(value));
    if (reset) todos.value = [];
};
</script>

<template>
    <form @submit.prevent="addTodo" class="row gap-2 p-2 items-center">
        <div>
            <InputBoxV4
                label="Todo"
                name="todo"
                v-model:model-value="text"
                :error="error"
                placeholder="Enter Something.."
                :max="24"
            />
        </div>
        <button type="submit" class="btn btn-secondary btn-circle">Add</button>
        <button
            @click="updateWLocal([], true)"
            type="button"
            class="btn btn-warning btn-circle"
        >
            Clear
        </button>
    </form>
    <ul class="p-4 row gap-4">
        <li
            v-for="todo in todos"
            :style="{ backgroundColor: todo.bg }"
            class="font-semibold rounded-md p-2 capitalize text-black"
            :key="todo.text"
        >
            {{ todo.text || "@Error" }}
        </li>
    </ul>
</template>
