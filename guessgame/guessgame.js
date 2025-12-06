// let num=24;
// let userNumber=Number(prompt("Enter the number"));
// while(true)
// {
//     if(userNumber===num)
//     {
//         alert("Your Guess was correct");
//         break;
//     }
//     else
//     {
//         userNumber=Number(prompt(("Your guess was wrong, Try again")));
//     }
// }






let num=24;
let userNumber=prompt("Enter the number");
while(true)
{
    if(userNumber==num)
    {
        alert("Your Guess was correct");
        break;
    }
    else
    {
        userNumber=prompt(("Your guess was wrong, Try again"));
    }
}