/**
 *　Union Type どちらかの値をとる。
 *  uniontypeに+演算子は使えないerror表示が出るが、
 * どちらか一方によせれば大丈夫なことは知っている。
 * 下記はruntime時（JS）に、typeofでチェックが入るようにする。
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

const combinedAges = combine(10, 41);
console.log(combinedAges);

const combinedNames = combine("bakabon", "papa");
console.log(combinedNames);
