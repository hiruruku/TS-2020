/**
 * コンパイルエラー
 * const dwarf:object = { name: 'yoshio'} 
 * object型（{})を型に指定しても、
 * 具体的な型を指定してないので、代入はできない
 */
const dwarf/*:{
  name: string;
  age: number;
  hp: number;
}*/
 = {
  name: 'yosakoi yosao',
  age: 335,
  hp: 200,
};
console.log(dwarf.name);
/**
* const:objectは、{}を型明示しており、
* {}以外代入はコンパイル通る。
* しかし、key名で値は取り出せない。propertyなしと言われる。
*/
const waffle: object = {};
console.log(waffle); //結果 {}
const rabbit: object = { name: "tekito"};
// console.log(rabbit.name); //Cエラー:property,nameなし
let ramen = {};
ramen = {name: 'Jiro'};
//console.log(ramen.name);  //error TS2339: Property 'name' does not exist on type '{}'
let bargur = {name: 'BigMike'};
console.log(bargur.name);

