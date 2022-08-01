
const peter = {
    firstName: 'Peter',
    lastName: 'Smith',
    birthYear: 1990,
    jobTitle: 'student', 
    score: [100, 99, 90, 96],

    calAvgScore: function () {
        var scoreTotal = 0;

        for (i=0; i < this.score.length; i++) {
            scoreTotal += this.score[i];
        } 
        var avgScore = scoreTotal / this.score.length;
        return (avgScore);
    },
    showSummary: function() {
        this.summary = this.firstName + " " + this.lastName + " has completed a task, " + this.firstName + "'s average score is " + this.calAvgScore() + ". " + this.firstName + "'s highest score is " + this.score[0];
        

        return (this.summary);
    }
}

function convertCelsiusToFahrenheit() {

    var userInput = prompt("Enter degrees in Celsius: ");

    while (userInput < -88 || userInput > 58) {
        console.log("Please enter a valid number form -88 to 58.");
        userInput = prompt("Enter degrees in Celsius: ");
    } 

    var fahrenheit = (userInput * (9/5)) + 32;
    return fahrenheit;
}


//Priting the results onto the console.
console.log(peter.calAvgScore());
console.log(peter.showSummary());
console.log(convertCelsiusToFahrenheit())
