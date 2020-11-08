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

/* 
   NOTE: parallel arrays are not an ideal way to represent this data.
         We have done this to simplify this exercise.
         
         A better approach would be to turn these parallel arrays
         into an array of cart item objects. Objects are used in
         projects 2 and 3.
*/         