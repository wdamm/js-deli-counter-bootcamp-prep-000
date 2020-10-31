function takeANumber (line, person) {
line.push(person);
return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


function currentLine (katzDeliLine) {
 if (katzDeliLine.length === 0) {
   return "The line is currently empty.";
 }
 else {
  let count = 0;
  while (count < katzDeliLine) {
    let arr = [];
    arr.push(`${count + 1}. ${katzDeliLine[count]}`);
  }
 }
   result = "The line is currently " + arr;
  return result;
  
}