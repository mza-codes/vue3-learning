<script setup lang="ts">
import IfComponent from "./components/IfComponent.vue";
import ModalT from "./components/ModalT.vue";
import TodoComponent from "./components/TodoComponent.vue";
// OptionsAPI Component
import CounterOld from "./components/CounterOld.vue";
</script>

<template>
    <main
        class="min-h-screen bg-gradient-to-br from-red-200/50 via-rose-500/60 to-amber-600/70 col gap-4 center p-4"
    >
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
