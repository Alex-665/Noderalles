//useful functions for all the project

async function fetchRangeMath(begin, end) {
    return await (await fetch("http://numbersapi.com/" + begin + ".." + end + "/math")).json()
}

//async function fetchNumber(number) {
//    return await (await fetch("http://numbersapi.com/" + number + "?json")).json()
//}

export {fetchRangeMath}
