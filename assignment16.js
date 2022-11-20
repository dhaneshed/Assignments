function myFunction()
{
  let number=prompt("Enter a number to be checked whether Prime or Not");
  let flag=0;
  for(var i=2;i*i<=number;i++)
  {
   if(number%i==0)
   {
    flag=1;
    break;
   }
  }
  if(flag==0)
  {
    console.log(" "+number+" is Prime");
  }
  else
  {
    console.log(" "+number+" is not Prime ");
  }

}