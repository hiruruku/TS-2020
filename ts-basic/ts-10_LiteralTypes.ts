/**
 * Literal Types
 * 例えば、2.8など、Numberの中でも特定された値型のこと（あえて言えば、特定値型）
 * O'reilly Programming TypeScriptも参照
 * const var = 2.8; TS:2.8型 JS:number　constはJSにもある。
 * let var = 2.8;   TS:number JS:number
 * let var:2.8=2.8　TS:２.8 JS:number
 * 使い所としては、JSでは変数となるので初期値を特定の値に固定したい場合か。
 */

/**
 * ts-9_UnionTypes.tsのcombine関数に、
 * 第３引数を加える。第１段階として、特定文字で切り分ける。
 */
function combine_v1(
    input1: number | string,
    input2: number | string,
    resultConversion: string
) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        /* +単行演算子はparseFloat()と同じ。 */
        return +result;
    } else {
        return result.toString();
    }
}
/**
 *  上記resultConversionの第３引数が
 *  stringだと、指定する文字を覚えていなければならない。
 *  このようなケースではEnumを使うが、この場合
 *  1.文字が特定の2タイプに限定できる、
 *  2.許容するLiteralタイプが2つだけ、
 *  というところから、unionタイプとLiteralタイプを
 *  組み合わせ、引数の型を限定し、HardCordする方法を選択する。
 */
function combine_v2(
    input1: number | string,
    input2: number | string,
    /**
     * 重要ポイント：
     * stringでは、any stringになってしまう。
     * union型でリテラルタイプを指定することで、
     * コンパイルチェック機能も働く。
     */
    resultConversion: "as-number" | "as-text"
) {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    } /* +単行演算子はparseFloat()と同じ。 */
    // if (resultConversion === "as-number") {
    //    return +result;
    //} else {

    return result;
}
/** 呼び出しセット */
//1.第１第２引数:number、第３引数に"as-number"
const combineAges_v1 = combine_v1(10, 41, "as-number");
console.log(combineAges_v1); //結果:51

//2.第１第２引数:number、第3引数に"as-text"
const combineAges_v2 = combine_v1(10, 41, "as-text");
console.log(combineAges_v2); //結果: '1041'

//3.第１第２引数:string、第3引数"as-number"
const combinedStringAges = combine_v1("30", "26", "as-number");
console.log(combinedStringAges); //結果:56

//4.第１第２引数:string、第3引数"as-text"
const combinedStringAges_v1 = combine_v1("30", "26", "as-text");
console.log(combinedStringAges_v1); //結果:'3026'

//5.第１第２引数：string、第３引数"as-text"
const combinedNames_v1 = combine_v1("bakabon", "papa", "as-text");
console.log(combinedNames_v1);
