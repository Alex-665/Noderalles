//useful functions for all the project

async function fetchRangeMath() {
    let response = await fetch("http://numbersapi.com/1..20/math?json");
    let data = await response.json();
    let res = new Array();
    for (let key in data) {
        res.push(data[key]);
    }
    console.log(res);
    return res;
}

//async function fetchNumber(number) {
//    return await (await fetch("http://numbersapi.com/" + number + "?json")).json()
//}

export {fetchRangeMath}
