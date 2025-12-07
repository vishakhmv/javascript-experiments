const price = (str) => {
    let s=0;
    for(let i of str)
    {
        let c=i.toUpperCase();
        if(c==="A" || c==="E" || c==="I" || c==="O" || c==="U")
        {
            s=s+1;
        }
    }
    return s;
}

console.log(price("Hello"));