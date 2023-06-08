<script setup lang="ts">
import { ref, watch } from "vue";
import InputBoxV4 from "./InputBoxV4.vue";
import getPasswordStrength from "ts-password-check";

const password = ref("");
const error = ref({ message: "", strength: "" });

watch(password, () => {
    const res = getPasswordStrength(password.value, {
        minLength: 6,
        digits: false,
        lowercase: true,
        specialChars: true,
        uppercase: true,
    });
    console.log("@RES =>", res);
    error.value = {
        message: res.messages.join("\n"),
        strength: res.strength,
    };
});
</script>

<template>
    <div class="col gap-2 p-2">
        <InputBoxV4
            label="Enter a Password"
            placeholder="supe6sec6et#-$$#%"
            max="30"
            v-model:model-value="password"
            :error="error.strength"
        />
        <span class="text-sm font-medium whitespace-pre px-3 text-red-400">
            {{ error.message }}
        </span>
    </div>
</template>
