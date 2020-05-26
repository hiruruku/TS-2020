const human = {
    name: "bubo",
    age: 50,
    hobbies: ["Droan", "Cooking", "Walking", "Collecting Stamp"],
    role: [2, "author"], //union型 (number | string)[]
};
human.role.push("admin"); //OK
human.role[1] = 10; //OK
console.log(human.role); //[2,10,'admin']
/**
 * ここで、human.roleの値は、配列だが、
 * 2つで、数と型が事前に判明しており、限定したい場合、
 * tuple　typeの出番
 * ただし、順番で管理しているだけなので、基本はクラスとインターフェースを使う！
 */
const newHuman: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //これが、TupleType
} = {
    name: "nububo",
    age: 30,
    hobbies: ["throw pebbles", "immitation"],
    role: [2, "author"],
    //role:[2,'autho','boon']はNG,Tupletypeはlengthプロパティをもち、Cチェッカー網にかかる。
};
//newHuman.role[2]='admin'; //Cチェッカー網：Type '"admin"' is not assignable to type 'undefined'
newHuman.role.push("admin"); //Cチェッカー網スリ抜け！留意点：pushは例外でコンパイルが通る。shiftも通るので、注意
//newHuman.role[1]=10;　　　 //Cチェッカー網：TS2322: Type '10' is not assignable to type 'string'
console.log(newHuman.role); //この場合、pushにより、結果は、[2,'author','admin']となる。
