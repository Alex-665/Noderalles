<template>
    <div>
        <input class="research" type=text v-model="search" placeholder="Rechercher un mot dans les facts">
    </div>
    <div>
        <input class="research" type="number" v-model="limit"/>
    </div>
    <button class="notActived" v-if="greatCounter % 2 == 0" v-on:click="greatCounter += 1, updateAllFilters()">GreaterThan</button>
    <button class="actived" v-else v-on:click="greatCounter += 1, updateAllFilters()">GreaterThan</button>
    <button class="notActived" v-if="oddCounter % 2 == 0" v-on:click="oddCounter += 1, updateAllFilters()">Odd</button>
    <button class="actived" v-else v-on:click="oddCounter += 1, updateAllFilters()">Odd</button>
    <button class="notActived" v-if="evenCounter % 2 == 0" v-on:click="evenCounter += 1, updateAllFilters()">Even</button>
    <button class="actived" v-else v-on:click="evenCounter += 1, updateAllFilters()">Even</button>
</template>

<style>
    div {
        display: flex;
        justify-content: center;
    }
    .research {
        font-size: 22px;
        width: 50%;
        margin: auto;
        flex-wrap: wrap;
    }
    .notActived {
        background-color: white;
        justify-content: center;
        font-size: 22px;
        width: 30%;
        border: none;
        flex-wrap: wrap;
    }
    .actived {
        background-color: orange;
        justify-content: center;
        font-size: 22px;
        width: 30%;
        border: none;
        color: red;
        flex-wrap: wrap;
    }
    @media (max-aspect-ratio: 1/1) {
        .notActived {
            width: 100%;
        }
        .actived {
            width: 100%;
        }
    }
    @media (min-aspect-ratio:1/1) and (max-aspect-ratio: 4/3) {
        .notActived {
            width: 50%;
        }
        .actived {
            width: 50%;
        }
    }
</style>

<script>
    export default {
        name: 'numberFilters',
        props: ["factArray", "completeArray", "filteredArray"],
        emits: ["update:filteredArray"],
        data() {
            return {
                limit: 0,
                greatCounter: parseInt(localStorage.getItem("greatCounter")) || 0,
                oddCounter: parseInt(localStorage.getItem("oddCounter")) || 0,
                evenCounter: parseInt(localStorage.getItem("evenCounter")) || 0,
                search: localStorage.getItem("search") || ""
            }
        },
        watch: {
            search: function(newSearch) {
                this.updateAllFilters()
                localStorage.setItem("search", newSearch)
            },
            greatCounter: function(newGreatCounter) {
                localStorage.setItem("greatCounter", newGreatCounter)
            },
            oddCounter: function(newOddCounter) {
                localStorage.setItem("oddCounter", newOddCounter)
            },
            evenCounter: function(newEvenCounter) {
                localStorage.setItem("evenCounter", newEvenCounter)
            }
        },
        methods: {
            updateAllFilters: function() {
                this.$emit("update:filteredArray", this.allFilters())
            },
            greaterNumber(t) {
                let res = t
                if (this.greatCounter % 2 == 1) {
                    res = t.filter((x) => {return x > this.limit})
                }
                return res
            },
            evenNumber(t) {
                let res = t
                if (this.evenCounter % 2 == 1) {
                    res = t.filter((x) => {return x % 2 == 0})
                }
                return res
            },
            oddNumber(t) {
                let res = t
                if (this.oddCounter % 2 == 1) {
                    res = t.filter((x) => {return x % 2 == 1})
                }
                return res
            },
            primeNumber() {
            },
            updateSearch(t) {
                let res = []
                if (this.search != ""){
                    let data = this.factArray
                    for (let i = 0; i<data.length; i++) {
                        if (data[i].toLowerCase().includes(this.search.toLowerCase())) {
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
