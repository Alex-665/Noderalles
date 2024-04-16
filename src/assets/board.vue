<template>
    <button v-on:click="reverseData">reverse</button>
    <filterNumbers v-bind:filteredArray="tmpArray" v-bind:completeArray="indexArray" v-model:filteredArray="tmpArray"/> 
    <displayNumber v-for="n in tmpArray" v-bind:value="n" v-bind:fact="numberData[n]"/>
</template>

<style>
    div {
        display: flex;
        width: 100%;
    }
</style>

<script>
    import displayNumber from "./etiquette.vue"
    import filterNumbers from "./filters.vue"
    import {fetchRangeMath} from "../utils.js"
    export default {
        components: {
            displayNumber,
            filterNumbers
        },
        data() {
            return {
                numberData: [],
                indexArray: [],
                tmpArray: []
            }
        },
        created: function() {
            this.retrieveRangeMath(this.beg, this.end)
        },
        methods: {
            async retrieveRangeMath(beg, end) {
                let dataArrays = await fetchRangeMath(beg, end)
                this.numberData = dataArrays.facts
                this.indexArray = dataArrays.indexArray
                this.tmpArray = dataArrays.indexArray
            },
            reverseData() {
                let reversed = []
                reversed = this.tmpArray.reverse()
                this.tmpArray = reversed
            },
        }
    }
</script>
