//useful functions for all the project

async function fetchRangeMath() {
    let response = await fetch("http://numbersapi.com/0..20/math?json");
    let data = await response.json();
    let facts = new Array();
    let indexArray = new Array();
    for (let key in data) {
        facts.push(data[key]);
        indexArray.push(key)
    }
    return {facts, indexArray};
}

export {fetchRangeMath}
