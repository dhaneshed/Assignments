function myFunction()
{
  var Number1=prompt("Enter the  first number");
  var Number2=prompt("Enter the second Number");
  Number1=parseInt(Number1);
  Number2=parseInt(Number2);
  var sum= Number1 +Number2;
  sum=parseFloat(sum);
  document.getElementById("demo").innerHTML= "Sum of the two numbers is "+sum+" ";

}