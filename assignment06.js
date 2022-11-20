function myFunction()
{
  let day_number= prompt("\nInput the day number (1-7)\n");
  day_number=parseFloat(day_number);
  switch(day_number)
  {
    case 1:{
      document.getElementById("demo").innerHTML=" Sunday ";
      break;
    }
    case 2:{
      document.getElementById("demo").innerHTML=" Monday ";
      break;
    }
    case 3:{
      document.getElementById("demo").innerHTML=" Tuesday ";
      break;
    }
    case 4:{
      document.getElementById("demo").innerHTML=" Wednesday ";
      break;
    }
    case 5:{
      document.getElementById("demo").innerHTML=" Thursday ";
      break;
    }
    case 6:{
      document.getElementById("demo").innerHTML=" Friday ";
      break;
    }
    case 7:{
      document.getElementById("demo").innerHTML=" Saturday ";
      break;
    }
    default:{
      document.getElementById("demo").innerHTML=" Invalid Entry ";
      break;
    }

  }
}