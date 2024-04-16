<template>
    <button class="prout" v-if="counter % 2 == 0" v-on:click="counter += 1">{{value}}</button>
    <button class="prout" v-else v-on:click="counter += 1">{{fact}}</button>
</template>

<style>
    .prout {
        width: 100%;
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
