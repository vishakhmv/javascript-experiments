let mark=prompt("Enter the mark of the student");

if(mark>=90 && mark<=100){
    console.log("A grade")
}
else if(mark>=70 && mark<89){
    console.log("B grade");
}
else if(mark>=60 && mark<=69){
    console.log("C grade");
}
else if(mark>=50 && mark<=59){
    console.log("D grade");
}
else{
    console.log("F grade");
}