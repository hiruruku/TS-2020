/**
 * JavaScriptではif文typeofで引数の型チェックし、
 * 実行時エラーを出すしかなかったが、
 * 型の間違い(ロジック的に間違いでもエラーが出ず実行されるもの)
 * も、開発段階にコンパイルチェックでエラーが出る。
 * @param n1
 * @param n2
 */
var ts1add = function (n1: number, n2: number) {
 /*if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  throw new Error('Incorrect input!');
 }*/
  return n1 + n2;
}

const ts1num1 = 5; 　//TypeScriptで、'5'にするとコンパイル時エラー
const ts1num2 = 2.8;

const ts1ret = ts1add(ts1num1, ts1num2);
console.log(ts1ret);