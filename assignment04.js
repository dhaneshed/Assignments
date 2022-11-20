function myFunction()
{
  let marks=prompt("\nEnter the marks (out of 100)\n");
  if(marks>=50)
  {
    document.getElementById("demo").innerHTML= "Passed";
  }
  else
  {
    document.getElementById("demo").innerHTML="Failed";
  }
}