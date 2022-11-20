function myFunction()
{
 let array1=[];
 let array2=[];
 let array3=[];
 let row=prompt("Enter the number of rows in 2D array");
 let col=prompt("Enter the number of columns in 2D array");
  for(i=0;i<row;i++)
  {
    for(j=0;j<col;j++){
      array1[i]=[];
      array2[i]=[];
      array3[i]=[];
    }
    
  }
  for(i=0;i<row;i++)
  {
    for(j=0;j<col;j++)
    {
      array1[i][j]=Number(prompt("Element array1["+i+"]["+j+"]"));
    }
  }
  for(i=0;i<row;i++)
  {
    for(j=0;j<col;j++)
    {
      array2[i][j]=Number(prompt("Element array2["+i+"]["+j+"]"));
    }
  }
  console.log(" Array 01 values are: "+array1+"\n");
  console.log(" Array 02 values are: "+array2+"\n");
  for(i=0;i<row;i++)
  {
    for(j=0;j<col;j++)
    {
      array3[i][j]=array1[i][j]+array2[i][j];
    }
  }
  console.log(" Resultant Sum matrix of the two matrices are:"+array3+"\n");

 
 

}