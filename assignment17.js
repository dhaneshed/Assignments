class ArithmeticOperation{
  constructor(a,b){
    this.a=a;
    this.b=b;
  a=Number(a);
  b=Number(b);
 
  }
  

  addition(a,b){
    a=Number(a);
    b=Number(b);
    console.log("Sum of two numbers is "+(a+b));

  }
  subtraction(a,b){
    a=Number(a);
    b=Number(b);
    console.log("Difference of two numbers is "+(a-b));

  }
  multiplication(a,b){
    a=Number(a);
    b=Number(b);
    console.log("Product of two numbers is "+(a*b));

  }

  division(a,b){
    a=Number(a);
    b=Number(b);
    console.log("Ratio of two numbers is "+(a/b));
  }

}



 function myFunction()
{
  let n1=Number(prompt("Enter first number"));
  let n2=Number(prompt("Enter second number"));
  let choice=Number(prompt("1)Addition\n2)Substraction\n3)Multiplication\n4)Division\n"));
  let number1=new ArithmeticOperation(n1,n2);
  switch(choice){

    case 1:{
      number1.addition(n1,n2);
      break;
    }
    case 2:{
      number1.subtraction(n1,n2);
      break;
    }
    case 3:{
      number1.multiplication(n1,n2);
      break;
    }
    case 4:{
      number1.division(n1,n2);
      break;
    }
    default:{
      console.log("Invalid Input !!!");
    }
  }



}


