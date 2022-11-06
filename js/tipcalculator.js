
let  button=document.querySelector("button");
button.addEventListener("click",myFunction);
function myFunction(){
    let  price=document.getElementById("price").value;
    let  tip=document.getElementById("tip").value;
    let  numberofpeople=document.getElementById("numberofpeople").value;
    let tipoperation=price*(tip/100);
    let priceoperation=tipoperation+Number(price);
    let numberofpeoplesoperation=(Number(price)+tipoperation)/numberofpeople;
    alert(numberofpeoplesoperation);
    numberofpeoplecount=`Number of people is ${numberofpeople}so total amount is ${numberofpeoplesoperation} to each`;
    tipvalue=`your tip amount is ${tipoperation}`;
    pricevalue=`your total amount is ${priceoperation}`; 
    document.getElementById("demo").innerHTML=pricevalue;
    document.getElementById("demos").innerHTML=tipvalue;
    document.getElementById("Numberofpeople").innerHTML=numberofpeoplecount;
}