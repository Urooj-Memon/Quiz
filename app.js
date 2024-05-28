#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Which operater is commanly used to string concentation in typescript\n",
        choices: ["+", "-", "*"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Which command is used to compile typescript code?",
        choices: ["ts build", "ts compile", "tsc"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which of the following is NOT a Programming language useed for web Development",
        choices: ["Python", "JavaScript", "Css"]
    },
    {
        name: "question_4",
        type: "list",
        message: "For creating tsconfig.json file which command should be used?",
        choices: ["npm init -y", "tsc --init", "ts --init"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Const num1: number = 5;\n Const num2 = 6; \n console.log(num1 === 6 && num2 ===5",
        choices: ["true", "false", "error"]
    },
    {
        name: "question_6",
        type: "list",
        message: "Which methode adds values to the begining of an Array in Typescript?",
        choices: ["push()", "pop()", "unshift()"]
    },
    {
        name: "question_7",
        type: "list",
        message: "What will be the result of console.log(true && false || true)?",
        choices: ["true", "false", "syntax error"]
    },
    {
        name: "question_8",
        type: "list",
        message: "Which logical operator is used for short-circuit evalution?",
        choices: ["&&", "||", "both"]
    },
    {
        name: "question_9",
        type: "list",
        message: "What will be the output? console.log(true || false && false);",
        choices: ["false", "true", "error"]
    },
    {
        name: "question_10",
        type: "list",
        message: "What is correct way to cheak if two values are not equal in typescript",
        choices: ["a == b", "a === b", "a !== b"]
    },
]);
let score = 0;
switch (quiz.question_1) {
    case "+":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. InCorrect!");
}
switch (quiz.question_2) {
    case "tsc":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. InCorrect!");
}
switch (quiz.question_3) {
    case "Css":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. InCorrect!");
}
switch (quiz.question_4) {
    case "tsc --init":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. InCorrect!");
}
switch (quiz.question_5) {
    case "false":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. InCorrect!");
}
switch (quiz.question_6) {
    case "unshift()":
        console.log("6. Correct!");
        ++score;
        break;
    default:
        console.log("6. InCorrect!");
}
switch (quiz.question_7) {
    case "true":
        console.log("7. Correct!");
        ++score;
        break;
    default:
        console.log("7. InCorrect!");
}
switch (quiz.question_8) {
    case "both":
        console.log("8. Correct!");
        ++score;
        break;
    default:
        console.log("8. InCorrect!");
}
switch (quiz.question_9) {
    case "true":
        console.log("9. Correct!");
        ++score;
        break;
    default:
        console.log("9. InCorrect!");
}
switch (quiz.question_10) {
    case "a !== b":
        console.log("10. Correct!");
        ++score;
        break;
    default:
        console.log("10. InCorrect!");
}
console.log(`Your Score: ${score}`);
