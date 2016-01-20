$(document).ready(function() {
  $("form#questions").submit(function(event) {

 // debugger;
    var userInput = $('input#enter').val();

    var alphaNumeric = userInput.replace(/[^A-ZA-z]/g,"").toLowerCase();

    var countChars = alphaNumeric.length;

    var squareRoot = Math.sqrt(countChars);

    var roundInteger = Math.round(squareRoot);


    // function addNewlines(str) {
    //   var finalmessage = '';
    //   while (str.length > 0) {
    //     finalmessage += str.substring(0, roundInteger) + '\n';
    //     str = str.substring(roundInteger);
    //   }
    //   return finalmessage;
    // }

    $("#result").text(alphaNumeric);

  event.preventDefault();
  });
});
