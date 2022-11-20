function myFunction(){
  let marks_percent=prompt("\nEnter your marks percentage (out of 100)\n");
  marks_percent=parseFloat(marks_percent);
  if(marks_percent>=90)
  {
    document.getElementById("demo").innerHTML=" A ";
  }
  else if(marks_percent>=80 && marks_percent<=89)
  {
    document.getElementById("demo").innerHTML=" B ";
  }
  else if(marks_percent>=70 && marks_percent<=79)
  {
    document.getElementById("demo").innerHTML=" C ";
  }
  else if(marks_percent>=60 && marks_percent<=69)
  {
    document.getElementById("demo").innerHTML=" D ";
  }
  else if(marks_percent>=50 && marks_percent<=59)
  {
    document.getElementById("demo").innerHTML=" E ";
  }
  else if (marks_percent<50){
    document.getElementById("demo").innerHTML=" Failed ";
  }
}