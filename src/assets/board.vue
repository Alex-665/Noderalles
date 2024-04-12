<template>
    <!--<select id="sort-type">-->
    <!--<option value="croissant">aenrtaiuenrsatcroissant</option>-->
    <!--<option value="decroissant">decroissant</option>-->
    <!--</select>-->
    <!--<li v-for="n in numberData.length">{{n-1}}</li>-->
    <!--<li v-for="text in numberData">{{ text }}</li>-->
    <!--<displayNumber v-for="n in numberData.length" v-bind:value="n"/>-->
    <displayNumber v-for="n in numberData.length" v-bind:value="n" v-bind:fact="numberData[n-1]"/>
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
            evenNumber() {
            },
            oddNumber() {
            },
            primeNumber() {
            },
            fiboNumber() {
            }
        }
    }
</script>
