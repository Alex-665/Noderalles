<template>
    <button class="dataButton" v-if="counter % 2 == 0" v-on:click="counter += 1">{{value}}</button>
    <button class="dataButton" v-else v-on:click="counter += 1">{{fact}}</button>
</template>

<style>
    .dataButton {
        background-color: #ffccff;
        padding: 15px 15px;
        font-size: 16px;
        margin: 1em;
        color: black;
        text-align: center;
        border: none;
        justify-content: center;
        border-radius: 2em;
        width: 30%;

    }
</style>

<script>
    export default {
        name: 'displayNumber',
        props: ["value", "fact"],
        data() {
            return {
                counter: 0
            }
        },
    }
</script>
