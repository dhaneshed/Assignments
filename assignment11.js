function myFunction()
{
  let limit=prompt("Enter the size of array");
  const array=[];
  var count=0;
  for(var i=0;i<limit;i++)
  {
    array[i]=Number(prompt("Element "+(i+1)+" "));
    if(array[i]%2==0)
    {
      count=count+1;
    }
  
  }
  console.log(array);
  console.log("Number of Even Numbers in the given array is "+ count);

  
}