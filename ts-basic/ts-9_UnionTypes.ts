/**
 *　Union Type どちらかの値をとる。集合的には、両方OK。
 * 下記はruntime時（JS）に、typeofでチェックが入るようにしている。
 * @param input1 number | string
 * @param input2 number | string
 */
function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
