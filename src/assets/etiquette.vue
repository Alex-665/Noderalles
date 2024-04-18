<template>
    <button class="valueButton" v-if="counter % 2 == 0" v-on:click="counter += 1">{{value}}</button>
    <button class="factButton" v-else v-on:click="counter += 1">{{fact}}</button>
</template>

<style>
    .valueButton {
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
    .valueButton:hover {
        background-color: #fad86d;
        transition: 0.5s;
    }
    .factButton {
        background-color: #fad86d;
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
    @media (max-aspect-ratio: 1/1) {
        .valueButton {
            width: 100%;
        }
        .factButton {
            width: 100%;
        }
    }
</style>

<script>
    export default {
        name: 'displayNumber',
        props: ["value", "fact"],
        //watch: {
        //    counter: function(newCounter) {
        //        sessionStorage.setItem("counter", newCounter)
        //        console.log(newCounter)
        //    }
        //},
        data() {
            return {
                counter: 0
            }
        },
    }
</script>
