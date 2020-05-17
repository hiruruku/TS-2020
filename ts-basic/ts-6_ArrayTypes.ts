const earthling = {
  name: "bubo",
  age: 33,
  hobbies: ['Droan','Cooking','Walking','Collecting Stamp']
};
// flexible array,これだとなんでも入るJSと同じなので、
// TSの恩恵を放棄することにはなる。
let fActivities: any[];
fActivities= ['Sports',1];
//
let favoritActivities: string[];
favoritActivities = ['Fishing','Cooking','Bird Watching'];

for(const hobby of earthling.hobbies){
  console.log(hobby);
  console.log(hobby.map());
}