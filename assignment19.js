function myFunction(){
  let annual_income=Number(prompt("Enter the annual Income"));
  
  if(annual_income<=250000)
  {
    console.log("No Tax");
  }
  else if(annual_income>250000  && annual_income<=500000)
  {
    console.log(" Income Tax is "+(annual_income*0.05) +" ");
  }
  else if(annual_income>500000 && annual_income<=1000000)
  {
    console.log(" Income Tax is "+(annual_income*0.2)+" ");
  }
  else if(annual_income>1000000 && annual_income<=5000000)
  {
    console.log(" Income Tax is "+(annual_income*0.3)+" ");
  }

}