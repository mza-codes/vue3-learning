<template>
    <div class="relative col gap-2" :class="containerClassName">
        <label class="font-semibold text-xs text-secondary.400" :for="$props.label">
            {{ label }}
        </label>
        <div class="relative">
            <input
                ref="inputRef"
                class="rounded-lg border-gray.200 p-3 border-[1px] outline-primary.400 placeholder:text-gray.400 text-sm w-full"
                :class="isPassword ? 'pr-12' : ''"
                :type="isPassword ? (show ? 'text' : 'password') : type"
                v-bind="$attrs"
            />
            <button
                v-if="isPassword"
                type="button"
                class="absolute right-1 bottom-0 top-0 p-2 text-gray.200 hover:text-gray-400/80 text-2xl"
                @click="show = !show"
            >
                <span v-if="show"> + </span>
                <span v-else> - </span>
            </button>
        </div>
        <span class="text-error capitalize text-xs ml-1">{{ error }}</span>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from "vue";

export default defineComponent({
    name: "InputBoxV3",
    props: {
        label: {
            type: String as PropType<string>,
            required: true,
        },
        name: {
            type: String as PropType<string>,
            required: true,
        },
        containerClassName: String,
        error: String,
        type: String,
    },
    setup(props, { attrs }) {
        console.log("{props},{attrs}", { props, attrs });

        const inputRef = ref(null);
        const show = ref(false);
        const isPassword = ref(false);

        // Determine if the input is a password field
        if (props.name && typeof props.name === "string") {
            isPassword.value = props.name.includes("password");
        }

        return {
            inputRef,
            show,
            isPassword,
        };
    },
});
</script>
