function myFunction(){
  let limit=prompt("\nEnter a limit\n");
  let sum=0
  for(var i=0;(2*i+1)<=limit;i++)
  {
    sum=sum+(2*i+1);
  
  }
  document.getElementById("demo").innerHTML=" Odd Sum is "+sum;

}

