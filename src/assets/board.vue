<template>
    <select id="sort-type">
        <option value="croissant">croissant</option>
        <option value="decroissant">decroissant</option>
    </select>
    <displayNumber v-for="(text, number) in numberData" v-bind:value="number"/>
</template>

<style>
    div {
        display: flex;
        width: 100%;
    }
</style>

<script>
    import displayNumber from "./etiquette.vue"
    import {fetchRangeMath} from "../utils.js"
    export default {
        components: {
            displayNumber
        },
        data() {
            return {
                numberData: [],
                a: 10 
            }
        },
        created: function() {
            this.retrieveRangeMath()
        },
        methods: {
            async retrieveRangeMath() {
                this.numberData = await fetchRangeMath()
            },
        }
    }
</script>
