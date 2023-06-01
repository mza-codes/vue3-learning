<script setup lang="ts">
const props = defineProps({
    Label: String,
    type: String,
    placeholder: String,
    error: String,
});
</script>
<template>
    <div class="form-control max-w-xs">
        <label class="label">
            <span class="label-text font-semibold">{{ props.Label }}</span>
        </label>
        <input
            :type="props.type"
            :placeholder="props.placeholder"
            class="input input-sm max-w-xs"
        />
        <label class="label">
            <span class="label-text-alt text-red-50">{{ props.error }}</span>
        </label>
    </div>
</template>
