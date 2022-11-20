function getArray(values){
  let limit=prompt("Enter the array limit:");
  for(var i=0;i<limit;i++)
  {
    values[i]=prompt("Input Element "+(i+1)+"");

  }
  return values;

}
function displayArray(values)
{
  console.log(" Array values are "+ values+" \n");
  
}

function myFunction(){
  const array=[];
  getArray(array);
  displayArray(array);
}