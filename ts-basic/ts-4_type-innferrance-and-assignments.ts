/**
 * 14.型推論 型割り当て
 * TypeScriptは初期値のリテラル型から、型推論し型を静的に割り当てる。
 * const var = 1;とすればリテラル型1が型となる。JSではnumber。
 */
var ts4add = function(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
/**
 * constは初期化必須。
 * letの場合、宣言だけで変数、定数を初期化しないケースもあり。
 * 型割り当てをしないなら、Anyとなる。初期化時にnumber1='string';
 * などとすればstring型となる。
 */
let ts4num1: number;
ts4num1 = 5;
const ts4num2 = 2.8;
const printRet = true;
let retPhrase = 'Result is: ';

ts4add(ts4num1, ts4num2, printResult, resultPhrase);
