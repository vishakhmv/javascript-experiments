arr=[];
let n = Number(prompt("Enter the number of elements in the array"));
for(let i=0;i<n;i++)
{
    arr.push(i);
}

let rs = arr.reduce((res,curr)=>{
    return res * curr;
});

console.log(rs);