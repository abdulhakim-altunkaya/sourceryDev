function formatNumbers () {
  const userInputs = document.getElementById("userInput").value;
  if (userInputs.length == 3) {
    document.getElementById("userInput").value += ","
  } else if (userInputs.length == 7) {
    document.getElementById("userInput").value += ","
  } else if (userInputs.length > 11) {
    const correctValue = userInputs.substring(0, 11)
    alert("You can enter maximum 9 digits")
    document.getElementById("userInput").value = correctValue;
  }
}

function convertHex(){
  const userInputs = document.getElementById("userInput").value;
  if (userInputs.length < 9) {
    alert("I know, an RGB value can include numbers between 0-100 but as this task requires to write digits with comma separator, I had to exclude numbers lower than 100 for Red and Green parts. So, please increase your number to make it 3 digits for each color between 100-255")
    return;
  }
  const userInputArray = userInputs.split(",");
  const value1 = parseInt(userInputArray[0]);
  const value2 = parseInt(userInputArray[1]);
  const value3 = parseInt(userInputArray[2]);
  if (value1>255 || value2>255 || value3>255) {
    alert("Please enter a number smaller than 256")
    return;
  }
  /*GETTING FIRST HEX DIGIT*/
  const value1_divide = value1/16;
  const value1_string = value1_divide.toString();
  const value1_array = value1_string.split(".");
  var value1_array1 = parseInt(value1_array[0]);
  var value1_array2 = parseFloat(value1_divide) - parseFloat(value1_array1);
  var hex1;
  var hex2;
  if (value1_array1 == 0) {
    hex1 = "0";
  } else if (value1_array1 == 1) {
    hex1 = "1";
  } else if (value1_array1 == 2) {
    hex1 = "2";
  } else if (value1_array1 == 3) {
    hex1 = "3";
  } else if (value1_array1 == 4) {
    hex1 = "4";
  } else if (value1_array1 == 5) {
    hex1 = "5";
  } else if (value1_array1 == 6) {
    hex1 = "6";
  } else if (value1_array1 == 7) {
    hex1 = "7";
  } else if (value1_array1 == 8) {
    hex1 = "8";
  } else if (value1_array1 == 9) {
    hex1 = "9";
  } else if (value1_array1 == 10) {
    hex1 = "A";
  } else if (value1_array1 == 11) {
    hex1 = "B";
  } else if (value1_array1 == 12) {
    hex1 = "C";
  } else if (value1_array1 == 13) {
    hex1 = "D";
  } else if (value1_array1 == 14) {
    hex1 = "E";
  } else if (value1_array1 == 15) {
    hex1 = "F";
  }

  /*GETTING SECOND HEX DIGIT*/
  value1_array2 = value1_array2*16;
  value1_array2 = Math.trunc(value1_array2);

  if (value1_array2 == 0) {
    hex2 = "0";
  } else if (value1_array2 == 1) {
    hex2 = "1";
  } else if (value1_array2 == 2) {
    hex2 = "2";
  } else if (value1_array2 == 3) {
    hex2 = "3";
  } else if (value1_array2 == 4) {
    hex2 = "4";
  } else if (value1_array2 == 5) {
    hex2 = "5";
  } else if (value1_array2 == 6) {
    hex2 = "6";
  } else if (value1_array2 == 7) {
    hex2 = "7";
  } else if (value1_array2 == 8) {
    hex2 = "8";
  } else if (value1_array2 == 9) {
    hex2 = "9";
  } else if (value1_array2 == 10) {
    hex2 = "A";
  } else if (value1_array2 == 11) {
    hex2 = "B";
  } else if (value1_array2 == 12) {
    hex2 = "C";
  } else if (value1_array2 == 13) {
    hex2 = "D";
  } else if (value1_array2 == 14) {
    hex2 = "E";
  } else if (value1_array2 == 15) {
    hex2 = "F";
  }

  /*GETTING THIRD HEX DIGIT*/
  const value2_divide = value2/16;
  const value2_string = value2_divide.toString();
  const value2_array = value2_string.split(".");
  var value2_array1 = parseInt(value2_array[0]);
  var value2_array2 = parseFloat(value2_divide) - parseFloat(value2_array1);
  var hex3;
  var hex4;
  if (value2_array1 == 0) {
    hex3 = "0";
  } else if (value2_array1 == 1) {
    hex3 = "1";
  } else if (value2_array1 == 2) {
    hex3 = "2";
  } else if (value2_array1 == 3) {
    hex3 = "3";
  } else if (value2_array1 == 4) {
    hex3 = "4";
  } else if (value2_array1 == 5) {
    hex3 = "5";
  } else if (value2_array1 == 6) {
    hex3 = "6";
  } else if (value2_array1 == 7) {
    hex3 = "7";
  } else if (value2_array1 == 8) {
    hex3 = "8";
  } else if (value2_array1 == 9) {
    hex3 = "9";
  } else if (value2_array1 == 10) {
    hex3 = "A";
  } else if (value2_array1 == 11) {
    hex3 = "B";
  } else if (value2_array1 == 12) {
    hex3 = "C";
  } else if (value2_array1 == 13) {
    hex3 = "D";
  } else if (value2_array1 == 14) {
    hex3 = "E";
  } else if (value2_array1 == 15) {
    hex3 = "F";
  }

  /*GETTING THE FOURTH DIGIT*/
  value2_array2 = value2_array2*16;
  value2_array2 = Math.trunc(value2_array2);

  if (value2_array2 == 0) {
    hex4 = "0";
  } else if (value2_array2 == 1) {
    hex4 = "1";
  } else if (value2_array2 == 2) {
    hex4 = "2";
  } else if (value2_array2 == 3) {
    hex4 = "3";
  } else if (value2_array2 == 4) {
    hex4 = "4";
  } else if (value2_array2 == 5) {
    hex4 = "5";
  } else if (value2_array2 == 6) {
    hex4 = "6";
  } else if (value2_array2 == 7) {
    hex4 = "7";
  } else if (value2_array2 == 8) {
    hex4 = "8";
  } else if (value2_array2 == 9) {
    hex4 = "9";
  } else if (value2_array2 == 10) {
    hex4 = "A";
  } else if (value2_array2 == 11) {
    hex4 = "B";
  } else if (value2_array2 == 12) {
    hex4 = "C";
  } else if (value2_array2 == 13) {
    hex4 = "D";
  } else if (value2_array2 == 14) {
    hex4 = "E";
  } else if (value2_array2 == 15) {
    hex4 = "F";
  }



  /*GETTING FIFTH HEX DIGIT*/
  const value3_divide = value3/16;
  const value3_string = value3_divide.toString();
  const value3_array = value3_string.split(".");
  var value3_array1 = parseInt(value3_array[0]);
  var value3_array2 = parseFloat(value3_divide) - parseFloat(value3_array1);
  var hex5;
  var hex6;
  if (value3_array1 == 0) {
    hex5 = "0";
  } else if (value3_array1 == 1) {
    hex5 = "1";
  } else if (value3_array1 == 2) {
    hex5 = "2";
  } else if (value3_array1 == 3) {
    hex5 = "3";
  } else if (value3_array1 == 4) {
    hex5 = "4";
  } else if (value3_array1 == 5) {
    hex5 = "5";
  } else if (value3_array1 == 6) {
    hex5 = "6";
  } else if (value3_array1 == 7) {
    hex5 = "7";
  } else if (value3_array1 == 8) {
    hex5 = "8";
  } else if (value3_array1 == 9) {
    hex5 = "9";
  } else if (value3_array1 == 10) {
    hex5 = "A";
  } else if (value3_array1 == 11) {
    hex5 = "B";
  } else if (value3_array1 == 12) {
    hex3 = "C";
  } else if (value3_array1 == 13) {
    hex5 = "D";
  } else if (value3_array1 == 14) {
    hex5 = "E";
  } else if (value3_array1 == 15) {
    hex5 = "F";
  }

  /*GETTING THE SIXTH DIGIT*/
  value3_array2 = value3_array2*16;
  value3_array2 = Math.trunc(value3_array2);

  if (value3_array2 == 0) {
    hex6 = "0";
  } else if (value3_array2 == 1) {
    hex6 = "1";
  } else if (value3_array2 == 2) {
    hex6 = "2";
  } else if (value3_array2 == 3) {
    hex6 = "3";
  } else if (value3_array2 == 4) {
    hex6 = "4";
  } else if (value3_array2 == 5) {
    hex6 = "5";
  } else if (value3_array2 == 6) {
    hex6 = "6";
  } else if (value3_array2 == 7) {
    hex6 = "7";
  } else if (value3_array2 == 8) {
    hex6 = "8";
  } else if (value3_array2 == 9) {
    hex6 = "9";
  } else if (value3_array2 == 10) {
    hex6 = "A";
  } else if (value3_array2 == 11) {
    hex6 = "B";
  } else if (value3_array2 == 12) {
    hex6 = "C";
  } else if (value3_array2 == 13) {
    hex6 = "D";
  } else if (value3_array2 == 14) {
    hex6 = "E";
  } else if (value3_array2 == 15) {
    hex6 = "F";
  }

  document.getElementById("resultArea").innerHTML ="Your hex code is: "+"#"+hex1+hex2+hex3+hex4+hex5+hex6;

}



/*
const userInputs = document.getElementById("userInput").value;
document.getElementById("resultArea").innerHTML = userInputs;
*/
