function myFunction(){
  let number=prompt("Input the pattern limit(number)");
  var k=1;
  k=Number(k);
  document.getElementById("demo").innerHTML="";
  for(var i=1;i<=number;i++)
  {
    for(var j=1;j<=i;j++)
    {
      document.getElementById("demo").innerHTML+= k+" ";
      k++;
    }
    document.getElementById("demo").innerHTML+=" <br><br>";
  }
}