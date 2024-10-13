<template>
    <div class="ma-12">
        <h1 class="mb-8">Test Page Layout</h1>


        <p>
            This is a sample page layout generator. You can paste a YAML string in the input box below and see the
            generated layout. </p>


        <h3 class="mb-2">YAML Input</h3>
        <textarea v-model="yamlInput" placeholder="Paste YAML here" @input="generateLayout" rows="10" cols="80"
            style="background-color: lightgray;"></textarea>

        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>

        <h3 class="mb-2">Generated JSON</h3>
        <div v-if="layout" class="mb-4">
            <pre>{{ JSON.stringify(layout) }}</pre>
        </div>

        <h3 class="mb-2">Generated Layout</h3>
        <div v-if="layout">
            <RecursiveRow :row="layout.row" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import YAML from 'yaml';
import RecursiveRow from '../components/RecursiveRow.vue';

const yamlInput = ref('');
const layout = ref(null);
const errorMessage = ref('');

function generateLayout() {
    try {
        layout.value = YAML.parse(yamlInput.value);
        errorMessage.value = '';
    } catch (error) {
        errorMessage.value = 'Invalid YAML input. Please check your syntax. full error: ' + error;
        layout.value = null;
    }
}
</script>

<style scoped>
textarea {
    width: 100%;
    margin-bottom: 10px;
}

.error {
    color: red;
}
</style>
