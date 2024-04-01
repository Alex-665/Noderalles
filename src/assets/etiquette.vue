<template>
    <button class="prout" v-on:click="displayText">{{value}}</button>
    <div v-if="displayFact == 0">{{fact}}</div>
</template>

<style>
    .prout {
        width: 50%;
    }
</style>

<script>
    export default {
        name: 'displayNumber',
        props: ["value", "fact"],
        emit: ["enable"],
        data() {
            return {
                displayFact: 1
            }
        },
        metods: {
            displayText: function() {
                this.displayFact = 1 - this.displayFact
                console.log("ennnne")
            }
        }
    }
</script>
