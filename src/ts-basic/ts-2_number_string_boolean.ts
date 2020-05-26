/**
 * TypeScript 型
 * @param n1: number
 * @param n2: number
 * @param showResult: boolean;
 *
 */
var ts2add = function (n1: number, n2: number,showResult:boolean , phrase: string) {
 if(showResult){
  console.log(`${phrase}${n1+n2}`);
 }
  return n1 + n2;
}

const ts2num1 = 5; //number 内部的にはdoubleなので、5.0でも同じ
const ts2num2 = 2.8;
const print_Result = true;　//boolean
const resultPhrase = 'Result is:';

ts2add(ts2num1, ts2num2,print_Result,resultPhrase);
