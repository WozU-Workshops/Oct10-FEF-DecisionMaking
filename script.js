///////////////////////////////////////////////////////////////
// SWITCH CASES 
// switch(whatWeAreChecking){
//     case option1:
//         action;
//         break;
//     case option2:
//         action;
//         break;
//     case optionN:
//         action;
//         break;
//     default:
//         defaultAction;
// }
///////////////////////////////////////////////////////////////

//Depending on the job title of the employee, use a switch case to assign a supervisor to the employee.
// Developer -> Supervisor = Kevin
// Financial Advisor -> Supervisor = Paris 
// Admission Representative -> Supervisor = Lance
// Instructor -> Supervisor = Ashley

let employee = {
    name: "Cassandra Matos",
    jobTitle: "Instructor",
    supervisor: "unassigned"
};





///////////////////////////////////////////////////////////////
// TERNARY OPERATORS
// condition ? expression on true : expression on false
///////////////////////////////////////////////////////////////

// Convert the following if/else statement functionality using a ternary operator

let creditScore = 720;
let message;

if(creditScore >= 640){
    message = "Congratulations, you have been approved!";
}
else message = "Unfortunately, you have not been approved.";

console.log(message);