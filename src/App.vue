<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<template>
    <header class="header"> 
        <h1>Header of super cool facts about numbers</h1>
        <h2>Click on numbers you want to discover a fact about !</h2>
    </header>
    <myNumbers/>
    <footer class="header">
        <h1>Footer of super cool facts about numbers</h1>
    </footer>
</template>

<style>
    .header {
        width: 100%;
        text-align: center;
        color: red;
        background: orange;
    }
    @media (max-aspect-ratio: 1/1) {
        .header {
            width: 100%;
            background: blue;
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

