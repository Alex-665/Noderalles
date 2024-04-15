<template>
    <!--<select id="sort-type">-->
    <!--<option value="croissant">aenrtaiuenrsatcroissant</option>-->
    <!--<option value="decroissant">decroissant</option>-->
    <!--</select>-->
    <!--<li v-for="n in numberData.length">{{n-1}}</li>-->
    <!--<li v-for="text in numberData">{{ text }}</li>-->
    <!--<displayNumber v-for="n in numberData.length" v-bind:value="n"/>-->
    <input type="number" v-model="limit"/>
    <div>
        <input type="checkbox" v-on:click="greatBool += 1, allFilters()" name="scales">
        <label for="scales">GreaterThan</label>
    </div>
    <div>
        <input type="checkbox" v-on:click="oddBool += 1, allFilters()" name="scales">
        <label for="scales">Odd</label>
    </div>
    <div>
        <input type="checkbox" v-on:click="evenBool += 1, allFilters()" name="scales">
        <label for="scales">Even</label>
    </div>
        
    <button v-on:click="greaterNumber">greater</button>
    <button v-on:click="reverseData">reverse</button>
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
    import {fetchRangeMath} from "../utils.js"
    export default {
        components: {
            displayNumber
        },
        data() {
            return {
                limit: 0,
                greatBool: 0,
                oddBool: 0,
                evenBool: 0,
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
            greaterNumber() {
                if (this.greatBool % 2 == 1) {
                    let res = []
                    //on itère sur indexArray car c'est le premier filtre à être appliqué, sinon les autres doivent être appliqués sur le tmpArray
                    res = this.indexArray.filter((x) => {return x > this.limit})
                    this.tmpArray = res
                }
                else this.tmpArray = this.indexArray
            },
            evenNumber() {
                if (this.evenBool % 2 == 1) {
                    let res = []
                    res = this.tmpArray.filter((x) => {return x % 2 == 0})
                    this.tmpArray = res
                }
                //else this.tmpArray = this.indexArray
            },
            oddNumber() {
                if (this.oddBool % 2 == 1) {
                    let res = []
                    res = this.tmpArray.filter((x) => {return x % 2 == 1})
                    this.tmpArray = res
                }
                //else this.tmpArray = this.indexArray
            },
            //à faire après mais le principe est là donc ça va
            primeNumber() {
            },
            fiboNumber() {
            },
            reverseData() {
                let reversed = []
                reversed = this.tmpArray.reverse()
                this.tmpArray = reversed
            },
            allFilters() {
                this.greaterNumber()
                this.oddNumber()
                this.evenNumber()
            }
        }
    }
</script>
