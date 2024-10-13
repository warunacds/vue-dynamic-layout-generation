<template>
    <v-row>
        <template v-for="(col, colIndex) in row" :key="`col-${colIndex}`">
            <v-col :cols="col.col">
                <template v-if="col.row">
                    <RecursiveRow :row="col.row" :slotsData="slotsData" :slotsDatatypes="slotsDatatypes"
                        :pageParams="pageParams" :row-id="rowId">
                    </RecursiveRow>
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
    slotsData: Object,
    slotsDatatypes: Object,
    pageParams: Object,
    rowId: [String, Number]
});



</script>