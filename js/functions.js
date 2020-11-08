/* define functions here */

var total = 0;
var subTotal = 0;
var shipping = 0;
var tax = 0;
var grandTotal = 0;
var filenames = ["images/106020.jpg", "images/116010.jpg", "images/120010.jpg"];
var titles = ["Girl with a Pearl Earring", "Artist Holding a Thistle", "Portrait of Eleanor of Toledo"];
var quantities = [3, 1, 2];
var prices = [80, 125, 75];

function calculateTotal(x, y){
    subTotal = x*y;
    total += subTotal; 
    return subTotal;
}
function calculateFinalTotal(){
    return total;
}
function calculateTax(){
    tax =  total/10;
    return tax;
}
function calculateShipping(){
   if(total>1000){
       return shipping;
   }
   else{
       shipping = 40;
       return shipping;
   }
}
function calculateGrandTotal(){
   grandTotal = total+tax+shipping;
   return grandTotal;
}
        
