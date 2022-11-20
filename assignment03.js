function myFunction(){
  let P=prompt("\nInput the Principal Amount\n");
  let R=prompt("\nInput the Interest Rate\n");
  let n=prompt("\nInput the number of Years\n");
  P=parseInt(P);
  R=parseFloat(R);
  n=parseFloat(n);
  SI=(0.01*P*R*n);

  document.getElementById("demo").innerHTML="The Simple Interest is "+SI+"  ";
}