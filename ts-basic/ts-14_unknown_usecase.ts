let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
/**
 * unknownは、
 * 型不明であるが、anyのようなチェック放棄ではない。
 * 今代入されている値の正体がわかれば、他の型に代入して使える。
 * typeofやinstanceofなどのチェックで正体の確認要。
 * anyは型チェック放棄であるのでチェックなしで代入できる。
 * 型が不明の時、any型を使うよりもunknown型を使う方が安全。
 * union型 > unknown型　> any型
 */
if(typeof userInput === 'string') {
  userName = userInput;
}