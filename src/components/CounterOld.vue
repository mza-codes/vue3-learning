<!-- Options API Example -->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
});
</script>

<template>
    <div class="row gap-4 items-center">
        <button @click="increment" class="btn btn-circle btn-info">+</button>
        <span class="font-semibold text-2xl">{{ count }}</span>
        <button @click="decrement" class="btn btn-circle btn-warning">-</button>
    </div>
</template>
