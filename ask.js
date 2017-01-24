var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your pet`s name"
];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write("  >  ");
}

process.stdin.on('data', function(data) {

    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }

});

process.on('exit', function() {

    process.stdout.write("\n\n\n\n");

    process.stdout.write(`Your name is ${answers[0]}  and you like to ${answers[1]}. But you prefer to play with your ${answers[2]}`);

    process.stdout.write("\n\n\n\n");

});

ask(0);