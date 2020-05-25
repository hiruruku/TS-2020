/**
 * 残念な例：
 */
const barbarian = {
    name: "bubo",
    age: 66,
    hobbies: ["Prastic model","Game","Record appreciation"],
    role: "READ ONLY USER"　//役割をstringで指定
};
//stringが一致しない。
if(barbarian.role ==="Read-Only-User"){
    console.log('is read only user');
}
/**
 * JSでの一般的な使い方
 * 但し、roleのtypeはnumber
 */
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
const bubobarian = {
    name: "bobo",
    age: "999",
    hobbies: ["imaging the world after he die"],
    role: ADMIN
}
if(bubobarian.role===ADMIN){
    console.log('is admin');
}
/**
 * Enum can save us fine
 *
 */
enum Role {CAPTAIN,CLUE,Engineer,Navigator};
const VikingGrandpa = {
  name: "MuscleG",
  age: "89",
  hobbies: ["Muscle training","Street Fight"],
  role: Role.Engineer
}
if(VikingGrandpa.role===Role.Engineer){
    console.log('is Engineer');
}