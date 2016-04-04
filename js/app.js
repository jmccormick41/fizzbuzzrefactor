$(document).ready(function(){

    // click to view the numbers

   $("button").on("click", getInput);


});

var input = prompt('Please enter a number'); 

    while(isNaN(input) === true) {
      input = prompt ("You didn't pick a number! Try again.")
    }
    console.log(input);

//find the Fizz, Buzz and FizzBuzz
  function getNumber(input){
    
for( var i=1; i<=input; i++) {
        
        if ((i%5==0) && (i%3==0))
          { $(".num").append( " Fizzbuzz" + "<br>");}
     //divisible by  3 
        else if (i%3==0)
          { $(".num").append( " Fizz" + "<br>");}

   //divisible by  5
        else if  (i%5==0) 
          { $(".num").append(  " Buzz" + "<br>");}
         

   //all else
        else { $(".num").append( i + "<br>");}  
        }

}
//get the number from user
  function getInput() {
    var custInput = $(".datainput");
    var input = custInput.val();
    
  if ((input !== "") && (input <= 100) && (input >= 1) && ($.trim(input) !== "")) 

  {
      //hide input@button
    $(".num").html('');
   getNumber(input);
    custInput.val("");

  }
  else alert("Please enter a number between 1 and 100");
  }









