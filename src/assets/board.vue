<template>
    <div>
        <DisplayNumber :value="15"/>
        <DisplayNumber :value="17"/>
    </div>
</template>

<script>
    import DisplayNumber from "./etiquette.vue"
    import {fetchRangeMath} from "../utils.js"
    export default {
        components: {
            DisplayNumber
        },
        methods: {
        }
    }
</script>

