function myFunction(){
  var limit= prompt("Enter the array limit:");
  var array1=[];
  var array2=[];

  for(var i=0;i<limit;i++)
  {
    array1[i]= Number(prompt("Element "+ (i+1)));

  }

  for(var  i=0;i<limit;i++)
  {
    array2[i]=Number(prompt("Element "+(i+1)));
  }
  console.log("Array 01 Elements are:");
  console.log(array1);
  console.log("Array 02 Elements are:");
  console.log(array2);
  let temp=0;
  for(var i=0;i<limit;i++)
  {
    temp=array1[i];
    array1[i]=array2[i];
    array2[i]=temp;
    
  
  }
  console.log("Array 01 Elements are:");
  console.log(array1);
  console.log("Array 02 Elements are:");
  console.log(array2);



  
}