function getArray( size,values){
  
   for(var i=0;i<size;i++)
   {
    for(var j=0;j<size;j++)
    {
      values[i]=[];
    }
   }
   for(var i=0;i<size;i++)
   {
    for(var j=0;j<size;j++)
    {
      values[i][j]=Number(prompt("Element["+(i+1)+"]["+(j+1)+"]"));
    }
   }
   console.log("Array values are:"+ values);
   return values;
  
}

function addArray(size,arr1,arr2,arr3)
{
  for(var i=0;i<size;i++)
  {
    for(var j=0;j<size;j++)
    {
      arr3[i]=[];
    }
  }
  for(var i=0;i<size;i++)
  {
    for(var j=0;j<size;j++)
    {
      arr3[i][j]=arr1[i][j]+arr2[i][j];
    }
  }
  
  return arr3;


}
function displayArray(size,arr3)
{
  console.log("Resultant Array Values are "+ arr3+" " );

}


function myFunction(){
  let arr1=[];
  let arr2=[];
  let arr3=[];
  let size=Number(prompt("Enter the size of the array"));
  arr1=getArray( size,arr1);
  arr2=getArray(size,arr2);
  arr3=addArray(size,arr1,arr2,arr3);
  displayArray(size,arr3);
  
  
}