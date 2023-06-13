<script lang="ts">
import { defineComponent } from "vue";

import IfComponent from "./components/IfComponent.vue";
import ModalT from "./components/ModalT.vue";
import TodoComponent from "./components/TodoComponent.vue";
import CheckBox from "./components/CheckBox.vue";
import PasswordChecker from "./components/PasswordChecker.vue";
// OptionsAPI Component
import CounterOld from "./components/CounterOld.vue";
import ImageViewerV2 from "./components/ImageViewerV2.vue";

export default defineComponent({
    name: "App",
    components: {
        IfComponent,
        ModalT,
        TodoComponent,
        CheckBox,
        PasswordChecker,
        CounterOld,
        ImageViewerV2,
    },
});
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
