import inquirer from "inquirer";
let Yourage;
let Childage = 18;
let AdultAge = 18;
let SenoirAge = 65;
let InfnantChildAge = 4;
const answer = await inquirer.prompt([
    {
        name: "Your Age",
        type: "number",
        message: "Please Enter Your Age"
    }
]);
Yourage = answer["Your Age"];
const ChildTicket = 500;
const AdultTicket = 1000;
const SeniorCitizenTicket = 700;
const InfnantChildTicket = 0;
if (Yourage <= InfnantChildAge) {
    console.log(`You are infnant Child, Your Ticket is Free`);
}
else if (Yourage <= Childage) {
    console.log(`You are a Child, Your Ticket Price is ${ChildTicket}.`);
}
else if (Yourage >= SenoirAge) {
    console.log(`You are Senior Citizen, you have 30% Discount your Ticket Price is ${SeniorCitizenTicket}`);
}
else if (Yourage >= AdultAge) {
    console.log(`You are an Adult, Your Ticket Price is ${AdultTicket}.`);
}
