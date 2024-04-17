<template>
    <input type="number" v-model="limit"/>
    <div>
        <label class="container">GreaterThan
            <input type="checkbox" v-on:click="greatBool += 1, updateAllFilters()">
        </label>
    </div>
    <div>
        <label class="container">Odd
            <input type="checkbox" v-on:click="oddBool += 1, updateAllFilters()">
        </label>
    </div>
    <div>
        <label class="container">Even
            <input type="checkbox" v-on:click="evenBool += 1, updateAllFilters()">
        </label>
    </div>
    <div>
        <input type=text v-model="search" placeholder="Rechercher un mot dans les facts">
    </div>
</template>

<style>
    div {
    }
    .container {
        display: block;
        position: relative;
        cursor: pointer;
        margin: 1em;
        font-size: 22px;
    }
</style>

<script>
    export default {
        name: 'filterNumbers',
        props: ["factArray", "completeArray", "filteredArray"],
        emits: ["update:filteredArray"],
        data() {
            return {
                limit: 0,
                greatBool: 0,
                oddBool: 0,
                evenBool: 0,
                search: ""
            }
        },
        watch: {
            search() { this.updateAllFilters() }
        },
        methods: {
            updateAllFilters: function() {
                this.$emit("update:filteredArray", this.allFilters())
            },
            greaterNumber(t) {
                let res = t
                if (this.greatBool % 2 == 1) {
                    res = t.filter((x) => {return x > this.limit})
                }
                return res
            },
            evenNumber(t) {
                let res = t
                if (this.evenBool % 2 == 1) {
                    res = t.filter((x) => {return x % 2 == 0})
                }
                return res
            },
            oddNumber(t) {
                let res = t
                if (this.oddBool % 2 == 1) {
                    res = t.filter((x) => {return x % 2 == 1})
                }
                return res
            },
            primeNumber() {
            },
            fiboNumber() {
            },
            updateSearch(t) {
                let res = []
                if (this.search != ""){
                    let data = this.factArray
                    for (let i = 0; i<data.length; i++) {
                        if (data[i].toLowerCase().includes(this.search)) {
                            res.push(i)
                        }
                    }
                    res = res.filter((x) => t.includes(x))
                    return res
                }
                else return t
            },
            allFilters() {
                let t = this.greaterNumber(this.completeArray)
                t = this.oddNumber(t)
                t = this.evenNumber(t)
                t = this.updateSearch(t)
                return t
            }
        }
    }
</script>


