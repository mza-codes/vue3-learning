<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Props {
    label?: string;
    error?: string;
    // ... add other prop types here
}

export default defineComponent({
    name: "CustomInput",
    props: {
        label: {
            type: String as PropType<string>,
            default: "",
        },
        error: {
            type: String as PropType<string>,
            default: "",
        },
        // ... add other props here
    },

    setup(props: Props) {
        // Extracting the props dynamically using the spread operator
        const inputProps = {
            ...props,
        };

        return {
            inputProps,
        };
    },
});
</script>

<template>
    <div class="form-control max-w-xs">
        <label class="label">
            <span class="label-text font-semibold">{{ label }}</span>
        </label>
        <input class="input input-sm max-w-xs" v-bind="inputProps" />
        <label class="label">
            <span class="label-text-alt text-red-50">{{ error }}</span>
        </label>
    </div>
</template>
