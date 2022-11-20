function myFunction(){
  let limit=prompt("Enter the array limit");
  let arr=[];
  let arr1=[];
  let k=0
  for(var i=0;i<limit;i++)
  {
    arr[i]=prompt("Element array["+(i+1)+"]")
  }
  console.log("Array values are:"+arr);
  for(var i=0;i<limit-1;i++)
  {
    arr1[k]=arr[i]*arr[i+1];
    k++;
  }

  console.log("Resultant array is "+arr1);


}