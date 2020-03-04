function takeANumber(currentLine, newPersonName){
    currentLine.push(newPersonName);
return ('Welcome, ' + newPersonName + '. You are number ' + currentLine.length + ' in line.')
//return  `Welcome, ${newPersonName}. You are number ${currentLine.length} in line.`;
}

/*function takeANumber(katzDeli, newCustomer) {
if (katzDeli.length > 0);
  katzDeli.push(newCustomer);
//return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
return  `Welcome, ${newCustomer}. You are number ${katzDeli.length} in line.`;
}*/

function nowServing(katzDeliLine){
if (katzDeliLine.length > 0){
return "Currently serving "+katzDeliLine.shift()+".";}
else if (katzDeliLine.length === 0){
  return "There is nobody waiting to be served!"}
}
//////////
function currentLine(katzDeliLine) {
 if (katzDeliLine.length===0) {
 return "The line is currently empty.";
 }
 var printArray = [];
 for (var i=0; i<katzDeliLine.length; i++) {
 printArray.push(i + 1 + ". " + katzDeliLine[i])
 }
 return "The line is currently: " + printArray.join(", ");
}
