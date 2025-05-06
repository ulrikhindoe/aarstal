// Quiz data
const quizData = [
    {
        "question": "Hvornår fandt slaget ved Dybbøl sted?",
        "options": [
            {"option": "17. januar 1888", "correct": false},
            {"option": "18. April 1864", "correct": true}
        ],
        "yearForSorting": 1864
    },
    {
        "question": "Hvornår begyndte Danskerne at gøre oprør mod den tyske besættelse?",
        "options": [
            {"option": "1945", "correct": false},
            {"option": "1940", "correct": false},
            {"option": "1942", "correct": true}
        ],
        "yearForSorting": 1942
    },
    {
        "question": "Den sorte død hærgede Danmark i",
        "options": [
            {"option": "1626", "correct": false},
            {"option": "1350", "correct": true},
            {"option": "1224", "correct": false}
        ],
        "yearForSorting": 1350
    },
    {
        "question": "Hvornår ankom de første kristne missionærer til Grønland",
        "options": [
            {"option": "1741", "correct": false},
            {"option": "1721", "correct": true},
            {"option": "1731", "correct": false}
        ],
        "yearForSorting": 1721
    },
    {
        "question": "Hvor længe var Kongeloven grundlaget for kongens enevældige magt?",
        "options": [
            {"option": "Frem til 1849", "correct": true},
            {"option": "Frem til 1869", "correct": false},
            {"option": "Frem til 1859", "correct": false}
        ],
        "yearForSorting": 1849
    },
    {
        "question": "Ca. hvornår blev Harald Blåtands runesten rejst?",
        "options": [
            {"option": "Ca. 975", "correct": false},
            {"option": "Ca. 1015", "correct": false},
            {"option": "Ca. 965", "correct": true}
        ],
        "yearForSorting": 965
    },
    {
        "question": "Hvornår fandt Slaget på Fælleden sted?",
        "options": [
            {"option": "Juni 1875", "correct": false},
            {"option": "Maj 1872", "correct": true},
            {"option": "August 1879", "correct": false}
        ],
        "yearForSorting": 1872
    },
    {
        "question": "Hvornår blev Danmarks første tilfælde af Covid-19 opdaget?",
        "options": [
            {"option": "Marts 2019", "correct": false},
            {"option": "Februar 2020", "correct": true},
            {"option": "Marts 2020", "correct": false}
        ],
        "yearForSorting": 2020
    },
    {
        "question": "Hvornår startede den 2. slesvigske krig?",
        "options": [
            {"option": "Februar 1864", "correct": true},
            {"option": "Januar 1868", "correct": false},
            {"option": "December 1871", "correct": false}
        ],
        "yearForSorting": 1864
    },
    {
        "question": "Hvornår blev Norden et selvstændigt kirkeligt område?",
        "options": [
            {"option": "1113", "correct": false},
            {"option": "1103", "correct": true},
            {"option": "1123", "correct": false}
        ],
        "yearForSorting": 1103
    },
    {
        "question": "Retten til at fri abort blev indført i",
        "options": [
            {"option": "1991", "correct": false},
            {"option": "1988", "correct": false},
            {"option": "1973", "correct": true}
        ],
        "yearForSorting": 1973
    },
    {
        "question": "Efter 564 år under Danmark, løsrev Island sig i",
        "options": [
            {"option": "1934", "correct": false},
            {"option": "1944", "correct": true}
        ],
        "yearForSorting": 1944
    },
    {
        "question": "Indtil hvornår ejede Danmark de tre vestindiske øer?",
        "options": [
            {"option": "1876", "correct": false},
            {"option": "1917", "correct": true},
            {"option": "1864", "correct": false}
        ],
        "yearForSorting": 1917
    },
    {
        "question": "Hvornår blev den sidste håndfæstning underskrevet?",
        "options": [
            {"option": "1564", "correct": false},
            {"option": "1648", "correct": true},
            {"option": "1734", "correct": false}
        ],
        "yearForSorting": 1648
    },
    {
        "question": "Hvornår forlod Sverige Kalmarunionen, hvorefter den blev opløst?",
        "options": [
            {"option": "1543", "correct": false},
            {"option": "1533", "correct": false},
            {"option": "1523", "correct": true}
        ],
        "yearForSorting": 1523
    },
    {
        "question": "Hvornår skilte en del af Venstre sig ud i Det radikale venstre?",
        "options": [
            {"option": "1915", "correct": false},
            {"option": "1905", "correct": true}
        ],
        "yearForSorting": 1905
    },
    {
        "question": "Hvornår havde ligestillingskampen sin begyndelse?",
        "options": [
            {"option": "Slutningen af 1800-tallet", "correct": true},
            {"option": "Slutningen af 1900-tallet", "correct": false},
            {"option": "Slutningen af 1700-tallet", "correct": false}
        ],
        "yearForSorting": 1900
    },
    {
        "question": "Hvornår blev danske soldater sendt til Afghanistan for at deltage i krigen?",
        "options": [
            {"option": "2002", "correct": true},
            {"option": "1999", "correct": false},
            {"option": "2012", "correct": false}
        ],
        "yearForSorting": 2002
    },
    {
        "question": "Hvornår brød 2. Verdenskrig ud?",
        "options": [
            {"option": "1939", "correct": true},
            {"option": "1940", "correct": false},
            {"option": "1945", "correct": false}
        ],
        "yearForSorting": 1939
    },
    {
        "question": "Første gang, man ser navnet Danmark brugt var",
        "options": [
            {"option": "på en runesten fra 955", "correct": true},
            {"option": "I en gammel rejselogbog fra 1022", "correct": false},
            {"option": "i skriften på væggen i en gammel hytte fra 1271", "correct": false}
        ],
        "yearForSorting": 955
    },
    {
        "question": "De første to partier blev dannet omkring",
        "options": [
            {"option": "1870", "correct": false},
            {"option": "1850", "correct": true}
        ],
        "yearForSorting": 1850
    },
    {
        "question": "Hvornår opførte Harald Blåtand ringborge til forsvar?",
        "options": [
            {"option": "Omkring år 880", "correct": false},
            {"option": "Omkring år 980", "correct": true},
            {"option": "Omkring år 1180", "correct": false}
        ],
        "yearForSorting": 980
    },
    {
        "question": "Danmark blev medlem af EF den",
        "options": [
            {"option": "7. marts 1984", "correct": false},
            {"option": "1. januar 1973", "correct": true},
            {"option": "12. april 1977", "correct": false}
        ],
        "yearForSorting": 1973
    },
    {
        "question": "Hvilket år blev SF etableret?",
        "options": [
            {"option": "1949", "correct": false},
            {"option": "1969", "correct": false},
            {"option": "1959", "correct": true}
        ],
        "yearForSorting": 1959
    },
    {
        "question": "Norge blev i Kalmarunionen sammen med Danmark indtil år",
        "options": [
            {"option": "1655", "correct": false},
            {"option": "1724", "correct": false},
            {"option": "1814", "correct": true}
        ],
        "yearForSorting": 1814
    },
    {
        "question": "Hvornår blev enevælden officielt indført som styreform?",
        "options": [
            {"option": "1665", "correct": false},
            {"option": "1671", "correct": false},
            {"option": "1661", "correct": true}
        ],
        "yearForSorting": 1661
    },
    {
        "question": "Hvornår blev de dansksindede områder af Nordslesvig genforenet med Danmark?",
        "options": [
            {"option": "1864", "correct": false},
            {"option": "1871", "correct": false},
            {"option": "1920", "correct": true}
        ],
        "yearForSorting": 1920
    },
    {
        "question": "Hvornår trådte enevælden til?",
        "options": [
            {"option": "1680-1681", "correct": false},
            {"option": "1660-1661", "correct": true},
            {"option": "1670-1671", "correct": false}
        ],
        "yearForSorting": 1660
    },
    {
        "question": "Hvornår stemte danskerne om Maastricht-traktaten?",
        "options": [
            {"option": "juni 1993", "correct": false},
            {"option": "juni 1994", "correct": false},
            {"option": "juni 1992", "correct": true}
        ],
        "yearForSorting": 1992
    },
    {
        "question": "I hvilket år blev Danmark ramt af den internationale finanskrise?",
        "options": [
            {"option": "2006", "correct": false},
            {"option": "2011", "correct": false},
            {"option": "2008", "correct": true}
        ],
        "yearForSorting": 2008
    },
    {
        "question": "Hvornår var Christian 4. konge af Danmark?",
        "options": [
            {"option": "1598-1638", "correct": false},
            {"option": "1588-1648", "correct": true},
            {"option": "1568-1628", "correct": false}
        ],
        "yearForSorting": 1588
    },
    {
        "question": "Hvornår erklærede Preussen og Østrig krig mod Danmark?",
        "options": [
            {"option": "1850", "correct": false},
            {"option": "1871", "correct": false},
            {"option": "1864", "correct": true}
        ],
        "yearForSorting": 1864
    },
    {
        "question": "Hvilket år blev Socialdemokratiet et selvstændigt parti?",
        "options": [
            {"option": "1886", "correct": false},
            {"option": "1878", "correct": true},
            {"option": "1892", "correct": false}
        ],
        "yearForSorting": 1878
    },
    {
        "question": "Hvornår regerede Frederik 7.?",
        "options": [
            {"option": "1848-1863", "correct": true},
            {"option": "1838-1843", "correct": false},
            {"option": "1856-1899", "correct": false}
        ],
        "yearForSorting": 1848
    },
    {
        "question": "Hvornår blev de offentlige gymnasier åbnet for piger?",
        "options": [
            {"option": "1875", "correct": false},
            {"option": "1921", "correct": false},
            {"option": "1903", "correct": true}
        ],
        "yearForSorting": 1903
    },
    {
        "question": "Hvornår oplevede man igen højere økonomisk vækst i Danmark efter Finanskrisen?",
        "options": [
            {"option": "Slutningen af 2010'erne", "correct": false},
            {"option": "2020", "correct": false},
            {"option": "Midten af 2010'erne", "correct": true}
        ],
        "yearForSorting": 2015
    },
    {
        "question": "Hvilket år blev Harald Blåtand døbt?",
        "options": [
            {"option": "988", "correct": false},
            {"option": "1022", "correct": false},
            {"option": "965", "correct": true}
        ],
        "yearForSorting": 965
    },
    {
        "question": "Hvornår døde Knud Den Store?",
        "options": [
            {"option": "1086", "correct": false},
            {"option": "1103", "correct": false},
            {"option": "1035", "correct": true}
        ],
        "yearForSorting": 1035
    },
    {
        "question": "Hvornår blev slavehandel forbudt?",
        "options": [
            {"option": "1825", "correct": false},
            {"option": "1848", "correct": false},
            {"option": "1803", "correct": true}
        ],
        "yearForSorting": 1803
    },
    {
        "question": "Indtil hvilket år varede enevælden?",
        "options": [
            {"option": "1849", "correct": true},
            {"option": "1756", "correct": false},
            {"option": "1789", "correct": false}
        ],
        "yearForSorting": 1849
    },
    {
        "question": "Hvilke år var Danmark med i Trediveårskrigen?",
        "options": [
            {"option": "1589-1593", "correct": false},
            {"option": "1613-1618", "correct": false},
            {"option": "1625-1629", "correct": true}
        ],
        "yearForSorting": 1625
    }
];

// Utility function to shuffle arrays
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Function to get the correct answer for a question
function getCorrectAnswer(question) {
    for (const option of question.options) {
        if (option.correct) {
            return option.option;
        }
    }
    return "";
}

// Functions for index.html
function displayQuestionsList() {
    const listContainer = document.querySelector('.questions-list');
    if (!listContainer) return;
    
    // Sort questions by yearForSorting
    const sortedQuestions = [...quizData].sort((a, b) => a.yearForSorting - b.yearForSorting);
    
    // Create list items for each question
    sortedQuestions.forEach(question => {
        const correctAnswer = getCorrectAnswer(question);
        
        const listItem = document.createElement('div');
        listItem.className = 'list-group-item';
        
        const questionTitle = document.createElement('div');
        questionTitle.className = 'question-title';
        questionTitle.textContent = question.question;
        
        const answerText = document.createElement('div');
        answerText.className = 'correct-answer';
        answerText.textContent = `Svar: ${correctAnswer}`;
        
        listItem.appendChild(questionTitle);
        listItem.appendChild(answerText);
        listContainer.appendChild(listItem);
    });
}

// Variables for quiz.html
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalAnswered = 0;
let questionAnswered = false;

// Functions for quiz.html
function initQuiz() {
    // Check if we're on the quiz page
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    // Reset variables
    correctAnswers = 0;
    totalAnswered = 0;
    questionAnswered = false;
    
    // Shuffle questions
    currentQuestions = shuffleArray(quizData);
    currentQuestionIndex = 0;
    
    // Set up event listeners for buttons
    document.getElementById('next-button').addEventListener('click', showNextQuestion);
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
    
    // Show the first question
    showQuestion(currentQuestionIndex);
    
    // Update statistics
    updateStatistics();
}

function showQuestion(index) {
    if (index >= currentQuestions.length) {
        // Quiz is complete
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('quiz-completed').style.display = 'block';
        return;
    }
    
    const question = currentQuestions[index];
    
    // Display the question
    document.getElementById('question-text').textContent = question.question;
    
    // Clear previous options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Shuffle options
    const shuffledOptions = shuffleArray(question.options);
    
    // Create option buttons
    shuffledOptions.forEach((option, i) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.textContent = option.option;
        optionButton.dataset.correct = option.correct;
        optionButton.addEventListener('click', handleAnswerClick);
        
        optionsContainer.appendChild(optionButton);
    });
    
    // Reset state for new question
    questionAnswered = false;
    document.getElementById('next-button').style.display = 'block';
}

function handleAnswerClick(event) {
    // Prevent multiple answers to the same question
    if (questionAnswered) return;
    
    questionAnswered = true;
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    // Update statistics
    totalAnswered++;
    if (isCorrect) {
        correctAnswers++;
    }
    
    // Mark buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = true;
        
        if (button === selectedButton) {
            if (isCorrect) {
                button.classList.add('correct-option');
            } else {
                button.classList.add('incorrect-option');
            }
        }
        
        // Highlight the correct answer if the user selected an incorrect answer
        if (button.dataset.correct === 'true' && !isCorrect) {
            button.classList.add('correct-option');
        }
    });
    
    // Update statistics display
    updateStatistics();
}

function showNextQuestion() {
    if (!questionAnswered) return;
    
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function restartQuiz() {
    correctAnswers = 0;
    totalAnswered = 0;
    
    // Shuffle questions again
    currentQuestions = shuffleArray(quizData);
    currentQuestionIndex = 0;
    
    // Show first question
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('quiz-completed').style.display = 'none';
    
    showQuestion(currentQuestionIndex);
    updateStatistics();
}

function updateStatistics() {
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('total-count').textContent = totalAnswered;
    
    const percentage = totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0;
    document.getElementById('percentage').textContent = `${percentage}%`;
}