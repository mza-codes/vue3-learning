<script setup lang="ts">
const arr = [1, 2, 3, 4, 4, 5, 6, 6, 6, 6, 8];
</script>

<template>
    <h2 class="text-2xl font-bold">Sample Notes</h2>
    <div class="max-h-[88vh] overflow-y-scroll col gap-6 p-2 scroll-p-4">
        <span
            v-for="i in arr"
            :key="i"
            class="font-semibold max-w-lg text-white border border-white rounded-lg p-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi
            ipsam omnis assumenda nobis deserunt animi itaque autem cumque, doloremque
            neque quod expedita aliquam quaerat soluta quam amet quisquam illo.</span
        >
    </div>
</template>
