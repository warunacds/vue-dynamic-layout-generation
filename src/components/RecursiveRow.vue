<template>
    <v-row>
        <template v-for="(col, colIndex) in row" :key="`col-${colIndex}`">
            <v-col :cols="col.col">
                <template v-if="col.row">
                    <RecursiveRow :row="col.row"> </RecursiveRow>
                </template>
                <template v-else>
                    <DynamicComponent :component-id="col.component_id"></DynamicComponent>
                </template>
            </v-col>
        </template>
    </v-row>
</template>



<script setup lang="ts">

import DynamicComponent from './DynamicComponent.vue';
import RecursiveRow from './RecursiveRow.vue';



defineProps({
    row: Array,
});



</script>