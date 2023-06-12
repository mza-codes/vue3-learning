<script setup lang="ts">
import IfComponent from "./components/IfComponent.vue";
import ModalT from "./components/ModalT.vue";
import TodoComponent from "./components/TodoComponent.vue";
import CheckBox from "./components/CheckBox.vue";
import PasswordChecker from "./components/PasswordChecker.vue";

// OptionsAPI Component
import CounterOld from "./components/CounterOld.vue";
import ImageViewerV2 from "./components/ImageViewerV2.vue";
import ImageViewer from "./components/ImageViewer.vue";
</script>

<template>
    <main
        class="min-h-screen bg-gradient-to-br from-lime-950 to-rose-950 text-white col gap-4 center p-4"
    >
        <PasswordChecker />
        <CheckBox />
        <IfComponent />
        <TodoComponent />
        <ModalT />
        <CounterOld />
        <ImageViewerV2 />
        <!-- <ImageViewer /> -->
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
