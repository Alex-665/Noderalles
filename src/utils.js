//useful functions for all the project

async function fetchRangeMath() {
    //regarder ici si on ne peut pas avoir tous les fetch comme des éléments json individuels
    return await (await fetch("http://numbersapi.com/1..50/math?json")).json()
}

//async function fetchNumber(number) {
//    return await (await fetch("http://numbersapi.com/" + number + "?json")).json()
//}

export {fetchRangeMath}
