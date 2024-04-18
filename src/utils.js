//useful functions for all the project

async function fetchRangeMath() {
    let response = await fetch("http://numbersapi.com/0..99/math?json");
    let response2 = await fetch("http://numbersapi.com/100..199/math?json");
    let data = await response.json();
    let data2 = await response2.json();
    let facts = new Array();
    let indexArray = new Array();
    for (let key in data) {
        facts.push(data[key]);
        indexArray.push(parseInt(key))
    }
    for (let key in data2) {
        facts.push(data2[key]);
        indexArray.push(parseInt(key))
    }
    return {facts, indexArray};
}

export {fetchRangeMath}
