function vowels(str){
    let s=0;
    for(let i of str)
    {
        let c=i.toUpperCase();
        if(c==="A" || c==="E" || c==="I" || c==="O" || c==="U")
        {
            s=s+1;
        }
    }
    console.log(s);
}

vowels("Apple");
vowels("apple");
vowels("APPLE");