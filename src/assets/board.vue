<template>
    <filterNumbers class="filterNumber" v-bind:factArray="numberData" v-bind:filteredArray="tmpArray" v-bind:completeArray="indexArray" v-model:filteredArray="tmpArray"/> 
    <div>
        <button v-on:click="reverseData">Reverse</button>
    </div>
    <displayNumber class="displayCases" v-for="n in tmpArray" v-bind:value="n" v-bind:fact="numberData[n]"/>
</template>

<style>
    button {
        display: flex;
        flex-wrap: wrap;
    }
    div {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
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
                tmpArray: this.stringToArray(localStorage.getItem("tmpArray")) || []
            }
        },
        created: function() {
            this.retrieveRangeMath(this.beg, this.end)
        },
        watch: {
            tmpArray: function(newTmpArray) {
                let tmpString = ""
                for (let i = 0; i<newTmpArray.length; i++) {
                    tmpString = tmpString + newTmpArray[i].toString() + " "
                }
                localStorage.setItem("tmpArray", tmpString)
            }
        },
        methods: {
            async retrieveRangeMath(beg, end) {
                let dataArrays = await fetchRangeMath(beg, end)
                this.numberData = dataArrays.facts
                this.indexArray = dataArrays.indexArray
                this.tmpArray = this.stringToArray(localStorage.getItem("tmpArray")) || dataArrays.indexArray
            },
            reverseData() {
                let reversed = []
                reversed = this.tmpArray.reverse()
                this.tmpArray = reversed
            },
            stringToArray(t) {
                let res = []
                res = t.split(' ')
                res.map((x) => parseInt(x))
                res.pop()
                return res
            }
        }
    }
</script>
