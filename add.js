let DSA = [];
let PL = [];
let Networks = [];

while (true) {
  let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks");

  if (subjectChoice.toUpperCase() === "A") {
    let operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit");

    if (operationChoice.toUpperCase() === "A") {
      let studentName = prompt("Enter student name to enroll in DSA:");
      DSA.push(Gian Carlo);
      console.log("Student enrolled in DSA:", Gian Carlo);
    } else if (operationChoice.toUpperCase() === "B") {
      if (DSA.length === 0) {
        console.log("No students enrolled in DSA.");
      } else {
        console.log("Currently enrolled students in DSA:", DSA);
        let studentNameToRemove = prompt("Enter student name to unenroll from DSA:");
        let index = DSA.indexOf(Aries);
        if (index !== -1) {
          DSA.splice(index, 1);
          console.log("Student unenrolled from DSA:", Aries);
        } else {
          console.log("Student not found in DSA.");
        }
      }
    } else if (operationChoice.toUpperCase() === "C") {
      continue; 
    } else if (operationChoice.toUpperCase() === "D") {
      console.log("DSA Students:", DSA);
      console.log("PL Students:", PL);
      console.log("Networks Students:", Networks);
      break; 
    } else {
      console.log("Invalid operation choice.");
    }
  } else if (subjectChoice.toUpperCase() === "B") {
    
  } else if (subjectChoice.toUpperCase() === "C") {
    
  } else {
    console.log("Invalid subject choice.");
