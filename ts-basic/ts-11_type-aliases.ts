/**
 * Type Aliase
 * 例えば、下記の引数は、カスタムタイプとして
 * 型エイリアスにまとめることで、１つの型にまとめ流ことができる。
 *   関数（ input1: number | string,
 *      input2: number | string,　<= 重複している
 *      resultConversion: "as-number" | "as-text"
 *    )
 */

//TypeAliases
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combineEvolution(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    let result;
    if (
        typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
//Enumではなく、LiteralTypeでunion型を指定している
const combineAges_v3= combineEvolution(10, 41, "as-number");
console.log(combineAges_v3); //結果:51
//
const combineAges_v4= combineEvolution(10,41,'as-text');
console.log(combineAges_v4); //結果: 51

//ここが、ts-9と異なる。ts-9サンプルでは、as-numberがなければ結果は’3026’となる。
const combinedStringAges_v2 = combineEvolution("30", "26", "as-number");
console.log(combinedStringAges_v2);   //結果:56
//as textを指定すれば、'3026'
const combinedStringAges_v3 = combineEvolution('30','26',"as-text");
console.log(combinedStringAges_v3); //結果:'3026'

//UnitonTypeと同じだが、textと指定している。
const combinedNames_v2 = combineEvolution("bakabon", "papa", "as-text");
console.log(combinedNames_v2); //結果:bakabonpapa

/**
 * Type Aliases　はobjectも代入できる
*/
//FROM Type Alias　使用前
function greet_1( user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
  }
  function isOlder_1(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
  }
//TO　Type　Alias 使用
//Type Aliase使用
type User = { name: string; age: number };
/**
 * コードがシンプルになる。
 */
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
