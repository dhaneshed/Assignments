 class Arrays{
  constructor(size,array){
  this.size=size;
  this.array=array;
  }
  getArray( size,array)
  {
    for(var i=0;i<size;i++)
    {
      for(var j=0;j<size;j++)
      {
        array[i]=[];
      }
    }

    for (var i=0;i<size;i++)
    {
      for(var j=0;j<size;j++)
      {
        array[i][j]=prompt("Element["+(i+1)+"]["+(j+1)+"]");
      }
    }
     return array;
  }
  displayArray(size,array)
  {
    console.log(" Array Elements are: "+ array);

  }
 }
 
 
 
 
 
 function myFunction(){
  let  array=[]
  let size=prompt("Enter the size of array");
  let a1=new Arrays(size,array);
  array=a1.getArray(size,array);
  a1.displayArray(size,array);



 }