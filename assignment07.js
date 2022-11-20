function myFunction(){
  let number= prompt("\nEnter a number\n");
  document.getElementById("demo").innerHTML=" ";
  for(var i=1;i<11;i++)
  {
    document.getElementById("demo").innerHTML+="   "+ i + " X "+ number +" = "+ i*number+"<br>";

  }
}