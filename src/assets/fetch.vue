<template>
    <div>
    </div>
    <span id="res"></span>
</template>

<style>
</style>

<script>
    import {fetchRangeMath} from "../utils.js"
    var response = fetchRangeMath(0, 50)
    console.log(response)
    export default {
    }
</script>
