const arr = [1,2,3];
console.log(arr);

const res = [];
for(let i = 0; i < arr.length; i++){
  res.push(arr[i]*2);
}
console.log(res);

const res1 = arr.map((value)=> {
  return value * 2;
});
console.log(res1);

const res2 = arr.map((value)=>value * 2);
console.log(res2);

const res3 = arr.map((value, index) => index);
console.log(res3);

const items = [{id: 1, name: 'yuja'},{id: 2, name: 'cookie'}]
const res4 = items.map((item)=>{
  return {id: item.id}
});
console.log(res4);