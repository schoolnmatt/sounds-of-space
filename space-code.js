const instructionsstartbutton = document.getElementById("instructionsstartbutton");

const spacesound = document.getElementById("spacesound");

const answer1 = document.getElementById("answer1");

const answer2 = document.getElementById("answer2");

const answer3 = document.getElementById("answer3");

const counterDisplay = document.getElementById("counter");

const lives = document.getElementById("lives");

const playagainbutton = document.getElementById("playagainbutton");

const tryagainbutton = document.getElementById("tryagainbutton");

var counterTrack = 0;

var livesTrack = 3;

const questionPool = [

    {
        sound: "sounds/AncientUniverse.wav",
        answer: "images/rightanswers/AncientUniverse.jpg"
    },
    {
        sound: "sounds/CosmicCliffs.wav",
        answer: "images/rightanswers/CosmicCliffs.jpg"
    },
    {
        sound: "sounds/RingNebula.wav",
        answer: "images/rightanswers/RingNebula.jpg"
    },
    {
        sound: "sounds/BulletCluster.mp3",
        answer: "images/rightanswers/BulletCluster.jpg"
    },
    {
        sound: "sounds/CatsEyeNebula.mp3",
        answer: "images/rightanswers/CatsEye.jpg"
    },
    {
        sound: "sounds/CrabNebula.mp3",
        answer: "images/rightanswers/CrabNebula.jpg"
    },
    {
        sound: "sounds/HelixNebula.mp3",
        answer: "images/rightanswers/HelixNebula.png"
    },
    {
        sound: "sounds/HubbleUltraDeepField.mp3",
        answer: "images/rightanswers/HubbleUltraDeepField.jpg"
    },
    {
        sound: "sounds/PillarsOfCreation.mp3",
        answer: "images/rightanswers/PillarsOfCreation.jpg"
    },
    {
        sound: "sounds/SagittariusA.mp3",
        answer: "images/rightanswers/SagittariusA.jpg"
    }

]

var tempQuestionPool = [...questionPool];

const wrongAnswersPool = [

    "images/wronganswers/AndromedaGalaxy.jpg",
    "images/wronganswers/Callisto.jpg",
    "images/wronganswers/Ceres.jpg",
    "images/wronganswers/Earth.jpg",
    "images/wronganswers/Europa.jpg",
    "images/wronganswers/HoagsObject.jpg",
    "images/wronganswers/Jupiter.jpg",
    "images/wronganswers/Lo.jpg",
    "images/wronganswers/Mars.jpg",
    "images/wronganswers/Mercury.jpg",
    "images/wronganswers/Moon.jpg",
    "images/wronganswers/Neptune.jpg",
    "images/wronganswers/Pluto.jpg",
    "images/wronganswers/RAquarii.jpg",
    "images/wronganswers/Saturn.jpg",
    "images/wronganswers/Sun.jpg",
    "images/wronganswers/Tethys.jpg",
    "images/wronganswers/Titan.jpg",
    "images/wronganswers/Uranus.jpg",
    "images/wronganswers/Venus.jpg",

]

var tempWrongAnswersPool = [...wrongAnswersPool];

// Event listeners wait for a click, upon which they call separate functions

instructionsstartbutton.addEventListener("click", hideInstructions);

instructionsstartbutton.addEventListener("click", startGame);

answer1.addEventListener("click", checkAnswer);

answer2.addEventListener("click", checkAnswer);

answer3.addEventListener("click", checkAnswer);

playagainbutton.addEventListener("click", hideWin);

tryagainbutton.addEventListener("click", hideLose);

function hideInstructions() {

    // Hides instructions grid

    document.querySelector('.instructionsgrid').style.display = 'none';

}

function hideWin() {

    // Hides win grid and starts game

    document.querySelector('.wingrid').style.display = 'none';

    startGame();

}

function hideLose() {

    // Hides lose grid and starts game

    document.querySelector('.losegrid').style.display = 'none';

    startGame();

}

function startGame() {

    // Shows game grid and starts game

    document.querySelector('.gamegrid').style.display = 'grid';

    question();

}

function counter() {

    // Keep track of correct answers

    counterTrack++;

    if (counterTrack > 9) {

        win();

    }

    counterDisplay.innerText = counterTrack + "/10 correct";

}

function wrongGuess() {

    // Keep track of wrong answers

    livesTrack--;

    if (livesTrack == 2) {

        lives.src = "images/lives/twolives.png";

    }

    else if (livesTrack == 1) {

        lives.src = "images/lives/onelife.png";

    }

    else {

        lose();

    }

}

function win() {

    // Hide game, display win and reset state

    spacesound.pause();

    document.querySelector('.gamegrid').style.display = 'none';

    reset();

    document.querySelector('.wingrid').style.display = 'grid';

}

function lose() {

    // Hide game, display lose and reset state

    spacesound.pause();

    document.querySelector('.gamegrid').style.display = 'none';

    reset();

    document.querySelector('.losegrid').style.display = 'grid';

}

function checkAnswer(event) {

    // Check the answer clicked is correct

    if (event.target.dataset.correct == "true") {

        counter();

        question();

    }

    else {

        wrongGuess();

    }

}

function reset() {

    // Reset all temporary global variable information

    tempQuestionPool = [...questionPool];

    tempWrongAnswersPool = [...wrongAnswersPool];

    livesTrack = 3;

    lives.src = "images/lives/threelives.png";

    counterTrack = 0;

    counterDisplay.innerText = counterTrack + "/10 correct";

}

function question() {

    // Randomly select a sound

    var randomIndex = Math.floor(Math.random() * tempQuestionPool.length);

    var selectedQuestion = tempQuestionPool.splice(randomIndex, 1)[0];

    spacesound.src = selectedQuestion.sound;

    // Randomly select two wrong images

    var wrong1 = tempWrongAnswersPool.splice(Math.floor(Math.random() * tempWrongAnswersPool.length), 1)[0];

    var wrong2 = tempWrongAnswersPool.splice(Math.floor(Math.random() * tempWrongAnswersPool.length), 1)[0];

    // Put the correct answer with the two wrong answers

    var answers = [selectedQuestion.answer, wrong1, wrong2];

    // Shuffle the answers

    answers.sort(() => Math.random() - 0.5);

    // Assign to the images

    answer1.src = answers[0];

    answer2.src = answers[1];

    answer3.src = answers[2];

    // Note which image is correct

    answer1.dataset.correct = (answers[0] == selectedQuestion.answer);

    answer2.dataset.correct = (answers[1] == selectedQuestion.answer);

    answer3.dataset.correct = (answers[2] == selectedQuestion.answer);
}