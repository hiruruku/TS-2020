/**
 *　戻り値:void型
 *  関数の型指定 =>　関数型
 */

/**
 * TS戻り値:void型
 *    => JS:undefinedに変換される。
 *  console.log(printResult(add(5,12)));
 *  とすると、undefinedが返る。
 */
function printResult(num: number): void {
    console.log("Result: " + num);
}
//2.TSにもundefined型はある。
//但し、returnしないとエラーになる。
function printResult_undefined(num: number): undefined {
    console.log("Result: " + num);
    return;
}
//普通にadd 関数
function add(n1: number, n2: number) {
    return n1 + n2;
}

//1.戻り値void型printResult実行
printResult(add(5, 12)); // //結果:17

/**
 * 1.TSで、関数に初期値を入れない場合、 => 型推論が働かずany型
 * 2.型を指定しない場合,any型
 * 3.Function型を指定すると、引数の型が異なってもコンパイルを通ってしまうのでNG.
 * 基本:初期化（関数）するか、型だけ指定するか、どちらかは必要。
 */
/** これは、問題がある。 */
let combineValues;
combineValues = add;
//combineValues = 5; //これを入れると,関数じゃなくnumberなので、下記結果はJSでruntime error。
console.log(combineValues(8, 8)); //結果:16

/**
 * 関数型の指定　***重要****
 */
let combineValues_2: (a: number, b: number) => number;
combineValues_2 = add;
//combineValues_2 = printResult; //***Error:引数、戻り値の型をコンパイルチェックにかけられる
console.log(combineValues_2(10, 43)); //結果53

/**
 * 型推論しておく。
 */
let combineValues_3 = add;
//combineValues_3 = printResult; //error TS2322: Type '(num: number) => void' is not assignable to type '(n1: number, n2: number) => number'.
console.log(combineValues(8, 8));

/*---------------------------------------------------*/
/**
 * ちょっとだけ改善案 :Functionを指定する
 *　結論：関数の代入ならコンパイルを通してしまうので、あまり役に立たない。
 */
let combineValues_1: Function;
combineValues_1 = add; //CompileOK
//combineValues_1 = 5;   //Error 型5をFunctionに割り当てられません
combineValues_1 = printResult; //CompileOK => これはFuction型なのでコンパイル通るが、引数の型が異なりruntimeエラーを起こす
//console.log(combineValues_1(8,8));  //Result:8 undefined 第２引数はJS側で、拾うLogicがないので実行時undefinedとなる。
