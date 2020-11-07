/* define functions here */

function calculateTotal (quantities, price) {
    return quantities * price;

}

fuction outputCartRow (file, title, quantity, price, total) {
    document.write("<table border=1>")
  for (row=1; row<=5; row++) {
     document.write("<tr>")
     for (col=1; col<=5; col++) {
           document.write("<td>R" + row + "<br>C" + col + "</td>")
      }
      document.write("</tr>")
 }
 document.write("</table>")
}

function subtotal (x,y,z) {
    return (x+y+z)

}
function tax() {
    
}


        
