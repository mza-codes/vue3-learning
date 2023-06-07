<script setup lang="ts">
defineProps(["modelValue", "type", "label", "error", "placeholder", "max"]);
defineEmits(["update:modelValue"]);
</script>
<template>
    <div class="col gap-2 max-w-xs p-2 justify-center">
        <span class="text-sm tex font-semibold">{{ label }}</span>

        <input
            :type="type"
            :placeholder="placeholder"
            class="input input-sm max-w-xs font-medium text-black"
            :value="modelValue"
            :maxlength="max || '30'"
            @input="
                $emit(
                    'update:modelValue',
                    // @ts-ignore
                    $event.target?.value
                )
            "
        />
        <span class="label-text-alt text-white font-semibold err">{{ error }}</span>
    </div>
</template>

<style scoped>
.err::before {
    content: "! ";
    color: transparent;
}
</style>
