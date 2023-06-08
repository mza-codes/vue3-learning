<script setup lang="ts">
import { ref } from "vue";
const checkedNames = ref<string[]>(["square"]);
const boxes = ["box", "circle", "square", "rectangle"];
</script>

<template>
    <div class="col gap-2 center">
        <div class="row gap-2 items-center">
            <span class="font-semibold"> Checked Values: </span>
            <div class="font-medium">{{ checkedNames }}</div>
        </div>
        <div
            class="row gap-4 items-center min-w-[180px]"
            v-for="(name, i) in boxes"
            v-bind:key="`${name}-${i}`"
        >
            <input type="checkbox" :id="name" :value="name" v-model="checkedNames" />
            <label class="font-semibold text-sm capitalize" :for="name">{{ name }}</label>
        </div>
    </div>
</template>
