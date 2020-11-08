/* here are the arrays used for project 1 */

var filenames = ["106020.jpg", "116010.jpg", "120010.jpg"];
var titles = ["Girl with a Pearl Earring", "Artist Holding a Thistle", "Portrait of Eleanor of Toledo"];
var quantities = [3, 1, 2];
var prices = [80, 125, 75];

var tableHead = $('<thead><tr><th colspan="2">Product</th><th>#</th><th>Price</th><th>Amount</th></tr></thead>'); 
$(function(){
    $(".table-fill").empty();
    $(".table-fill").append(tableHead);
    $(".table-fill").append($('<tbody></tbody>'));

    //adding rows
    for(var i=0;i<filenames.length; i++){
      $("tbody")
      .append($('<tr><td><img src='+filenames[i]+'></td><td>'+titles[i]+
      '</td><td>'+quantities[i]+'</td><td>$'+prices[i]+
      '</td><td>$'+calculateTotal(quantities[i],prices[i])+'</td></tr>'));                    
    }    
    $("tbody").append($('<tr class="totals"><td colspan="4">Subtotal</td><td>$'+calculateFinalTotal().toFixed(2)+'</td></tr>'));
    $("tbody").append($('<tr class="totals"><td colspan="4">Tax</td><td>$'+calculateTax().toFixed(2)+'</td></tr>'));
    $("tbody").append($('<tr class="totals"><td colspan="4">Shipping</td><td>$'+calculateShipping().toFixed(2)+'</td></tr>'));
    $("tbody").append($('<tr class="totals"><td colspan="4">Grand Total</td><td>$'+calculateGrandTotal().toFixed(2)+'</td></tr>'));
})   // Trying different methods to add cart rows to get the same result



