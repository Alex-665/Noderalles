<template>
    <header class="header"> 
        <h1>Header of super cool website of facts about numbers</h1>
        <h2>Click on numbers you want to discover a fact about !</h2>
    </header>
    <myNumbers/>
    <footer class="header">
        <h1>Footer of super cool facts about numbers ~ by Oielexandre</h1>
    </footer>
</template>

<style>
    .header {
        width: 100%;
        text-align: center;
        color: black;
        background: orange;
        flex-wrap: wrap;
    }
    @media (max-aspect-ratio: 1/1) {
        .header {
            width: 100%;
        }
    }
    @media (min-aspect-ratio:1/1) and (max-aspect-ratio: 4/3) {
        .header {
            width: 100%;
        }
    }
</style>

<script>
    import myNumbers from "./assets/board.vue"
    export default {
        components: {
        myNumbers
        }
    }
</script>
