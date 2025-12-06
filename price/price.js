let arr=[33,69,49,29,79];

for(let i=0;i<arr.length;i++)
{
    let offer=(arr[i]/100)*10;
    let newPrice=arr[i]-offer;
    arr[i]=newPrice;
}

console.log(arr);