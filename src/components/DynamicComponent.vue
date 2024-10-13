<template>
    <div :style="compStyles">
        <pre> {{ componentId }}</pre>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineProps({
    componentId: Number,
});


const compStyles = computed(() => {
    return {
        "background-color": '#' + Math.floor(Math.random() * 16777215).toString(16),
        "display": "flex",
    };
});

</script>