<template>
    <div>
        <li v-for="(number, text) in numberData"> 
            <button name="b" type="buttonNumber">{{text}}</button>
        </li>
    </div>
</template>

<script>
    import displayNumber from "./etiquette.vue"
    import {fetchRangeMath} from "../utils.js"
    export default {
        components: {
            displayNumber
        },
        data() {
            return {
                numberData: []
            }
        },
        created: function() {
            this.retrieveRangeMath()
        },
        methods: {
            async retrieveRangeMath() {
                this.numberData = await fetchRangeMath()
            }
        }
    }
</script>
