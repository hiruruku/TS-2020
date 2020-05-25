/**
 * Function Types & callbacks
 */

/**
 * 関数定義 第3引数はcallback関数,関数の型を指定cb:mumberを受け取って、戻り値void型
 * 注意）このvoidの意味は、returnの値があっても無視するという意味。
 *　returnがあっても、コンパイルは通る。void型なので使用できない。
 */
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
    //const x = cb(result); //この場合,xはvoid型なので、基本(anyに型キャストでもしないと）計算などには使えない
    //return x*result //xがvoid型なので、コンパイルエラー、JSでは、any型。
}

//呼び出し側,number,number,
//ここではアロー関数を渡している。(number) => {console.log(a)};
addAndHandle(10, 20, (a) => {
    console.log(a);
    /**
     * 重要ポイント：callbackの戻り値型に明示的にvoidを指定していても、
     * 呼び出し側関数リテラルで、returnを返すことはでき、コンパイルも通る。
     */
    return 10;
});
