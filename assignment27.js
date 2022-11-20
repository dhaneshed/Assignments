function myFunction()
{
  let userHeight=prompt("Enter height");
  try{
    if(isNaN(userHeight))
    {
      throw new SyntaxError("notANumberError")
    }
    else if(userHeight>200)
    {
      throw new SyntaxError("HugeHeightError")
    }
    else if(userHeight<40)
    {
      throw new SyntaxError("TinyHeightError")
    }
    else if(userHeight>=40 && userHeight<=200)
    {
      throw new SyntaxError("valid")
    }

  }
  catch(err)
  {
    console.log(`Error : ${err.message} ${err.stack}`);
  }
}