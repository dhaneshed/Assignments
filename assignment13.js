function myFunction()
{
  let str=prompt("Enter a string");
  let length=str.length;
  console.log(str);
  let flag=0;
  
  for(var i=0;i<length;i++)
  {
    if(str[i]==str[length-i-1])
    {
      flag=flag+1;
    }
  }
    if(flag==length)
    {
      console.log("String is Palindrome");
    }
    else
    {
      console.log("String is not Palindrome");
    }

  
}