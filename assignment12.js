function myFunction()
{
  let limit=prompt("Enter the size of an array");
  const array=[];
  for(var i=0;i<limit;i++)
  {
    array[i]=Number(prompt("Element "+(i+1)+" "));
  
  }
  console.log(" Array values are  "+array);
  for(var i=0;i<limit-1;i++)
    for(var j=i+1;j<limit;j++)
  {
    if(array[i]<array[j])
    {
      temp=array[i];
      array[i]=array[j];
      array[j]=temp;
    }
  }
  console.log("Array values in descending order are "+array);
}