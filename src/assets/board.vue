<template>
    <numberFilters class="filterNumber" v-bind:factArray="dataArray" v-bind:filteredArray="tmpArray" v-bind:completeArray="indexArray" v-model:filteredArray="tmpArray"/> 
    <div>
        <button v-on:click="inverseData">Inverse</button>
    </div>
    <displayNumber class="displayCases" v-for="n in tmpArray" v-bind:value="n" v-bind:fact="dataArray[n]"/>
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
    import numberFilters from "./filters.vue"
    import {fetchRangeMath} from "../utils.js"
    export default {
        components: {
            displayNumber,
            numberFilters
        },
        data() {
            return {
                dataArray: [],
                indexArray: [],
                tmpArray: this.stringToArray(localStorage.getItem("tmpArray")) || []
            }
        },
        created: function() {
            this.retrieveRangeMath(this.beg, this.end)
        },
        watch: {
            tmpArray: function(newTmpArray) {
                let tmpString = this.arrayToString(newTmpArray)
                localStorage.setItem("tmpArray", tmpString)
            }
        },
        methods: {
            async retrieveRangeMath(beg, end) {
                let dataArrays = await fetchRangeMath(beg, end)
                this.dataArray = dataArrays.facts
                this.indexArray = dataArrays.indexArray
                this.tmpArray = this.stringToArray(localStorage.getItem("tmpArray")) || dataArrays.indexArray
            },
            inverseData() {
                let reversed = []
                reversed = this.tmpArray.reverse()
                this.tmpArray = reversed
                localStorage.setItem("tmpArray", this.arrayToString(this.tmpArray))
            },
            arrayToString(t) {
                //Convert [0, 1, 1, ..., 198, 199] to "0 1 2 ... 198 199 "
                let tmpString = ""
                for (let i = 0; i<t.length; i++) {
                    tmpString = tmpString + t[i].toString() + " "
                }
                return tmpString
            },
            stringToArray(s) {
                //Convert "0 1 2 ... 198 199 " to [0, 1, 1, ..., 198, 199]
                let res = []
                res = s.split(' ')
                res.map((x) => parseInt(x))
                res.pop()
                return res
            }
        }
    }
</script>
