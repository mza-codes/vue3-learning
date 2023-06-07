<script setup lang="ts">
import IfComponent from "./components/IfComponent.vue";
import ModalT from "./components/ModalT.vue";
import TodoComponent from "./components/TodoComponent.vue";
// OptionsAPI Component
import CounterOld from "./components/CounterOld.vue";
import { ref } from "vue";
import CheckBox from "./components/CheckBox.vue";
const msg = ref("");
</script>

<template>
    <main
        class="min-h-screen bg-gradient-to-br from-violet-950 to-rose-950 text-white col gap-4 center p-4"
    >
        <CheckBox />
        <IfComponent />
        <TodoComponent />
        <ModalT />
        <CounterOld />
    </main>
</template>

<style>
.row {
    @apply flex flex-row flex-wrap;
}

.col {
    @apply flex flex-col;
}

.center {
    @apply items-center justify-center;
}
</style>
