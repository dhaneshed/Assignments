function myFunction(){
  let written_test_marks= Number(prompt("Input the written test marks"));
  let lab_exam_marks= Number(prompt("Input the lab exam marks"));
  let assignments_marks= Number(prompt("Input the assignment marks"))
  let Grade= (written_test_marks*0.7)+(lab_exam_marks*0.2)+(assignments_marks*0.1);
  console.log(" Grade is "+Grade+" ");

} 