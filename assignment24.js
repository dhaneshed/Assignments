
class Area{
 circle()
 {
   let radius=Number(prompt("Input the radius of the Circle "));
   let Area = (22/7)*radius*radius;
   console.log("Area of Circle   "+ Area);

 }
 square()
 {
  let length=Number(prompt("Input the length of the Square "));
  let Area=length*length;
  console.log("Area of Square  "+ Area);
 }
 rectangle()
 {
  let length=Number(prompt("Input the length of the Rectangle"));
  let breadth=Number(prompt("Input the breadth of the Rectangle"));
  let Area=length*breadth;
  console.log("Area of Rectangle  "+ Area);

 }
 triangle()
 {
  let base=Number(prompt("Input the base length of the Triangle"));
  let height=Number(prompt("Input the height of the Triangle"));
  let Area=(0.5*base*height);
  console.log("Area of Triangle   "+ Area);

 }
}




class myClass extends Area{

  main(){
    let a1= new Area();
    let choice=Number(prompt("Area Calculation: 1)Circle\n2)Square\n3)Rectangle\n4)Triangle\n"));
    switch(choice){
      case 1: 
      {
        a1.circle();
        break;
      }
      case 2:
     {
          a1.square();
          break;
      }
      case 3:
      {
        a1.rectangle();
        break;
      }
      case 4:
      {
        a1.triangle();
        break;
      }
      default:{
        console.log(" Invalid Input");
      }
    }


}


}
function myFunction()
{
  let c1=new myClass();
  c1.main();
}

