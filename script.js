function pageLoad() {
    let name = prompt("What is your name?")
    document.getElementById('name').textContent += name;
}

function runGame() {
    const questionText = document.getElementById('question-number').textContent
    const questionNumber = parseInt(questionText[questionText.length - 1])
    let updateScore = checkAnswer(questionNumber)
    console.log(updateScore)
    if (updateScore) {
        alert('Correct')
        const score = document.getElementById('score').textContent
        document.getElementById('score').textContent = "Score: " + (parseInt(score[score.length - 1]) + 1)
    } else {
        alert('Incorrect.')
    }
    if (questionNumber != 7) {
        let questions = ["What is the square root of 9?", "What is the largest animal on the planet currently?", "What is the first element on the periodic table of elements?", "What is the capital of India?", "What is the most populous city in the US?", "Who is the all time leading scorer in the NBA?"]
        let answers = [["3", "4", "1", "2"], ["Blue Whale", "Elephant", "Ant", "Anteater"], ["Hydrogen", "Helium", "Oxygen", "Carbon"], ["New Delhi", "Delhi", "Bombay", "Mumbhatan"], ["New York City", "Los Angeles", "Mexico City", "Austin"], ["Lebron James", "Michael Jordan", "Steph Curry", "Brian Scalabrine"]]
        document.getElementById("question-text").textContent = questions[questionNumber - 1]
        document.getElementById('question-number').textContent = "Question: " + (questionNumber+1)
        currAnswer = "a"
        for(let i = 1; i < 5; i++) {
            newAnswer = currAnswer + i + "-label"
            document.getElementById(newAnswer).textContent = answers[(questionNumber - 1)][(i - 1)]
        }
    }
    
}

function checkAnswer(questionNumber) {
    answers = [1, 1, 1, 1, 1, 1, 1]
    currAnswer = "a"
    numberChecked = 0
    for(let i = 1; i < 5; i++) {
        newAnswer = currAnswer + i
        if (document.getElementById(newAnswer).checked) {
            numberChecked = i
            document.getElementById(newAnswer).checked = false;
        }
    }
    return numberChecked == answers[questionNumber]

}
