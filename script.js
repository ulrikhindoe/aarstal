const data = [
  {
    "name": "Frederik 3.",
    "year": "1609"
  },
  {
    "name": "Christian 4.",
    "year": "1577"
  },
  {
    "name": "Christian 10.",
    "year": "1870"
  },
  {
    "name": "Valdemar Atterdag",
    "year": "1320"
  },
  {
    "name": "Margrete 1.",
    "year": "1353"
  },
  {
    "name": "Knud den Hellige",
    "year": "1043"
  },
  {
    "name": "Hans Tausen",
    "year": "1494"
  },
  {
    "name": "Martin Luther",
    "year": "1483"
  },
  {
    "name": "Christian 3.",
    "year": "1503"
  },
  {
    "name": "Christian 9.",
    "year": "1818"
  },
  {
    "name": "Harald Blåtand",
    "year": "ca. 910"
  },
  {
    "name": "Gorm den Gamle",
    "year": "ca. 900"
  },
  {
    "name": "Svend Tveskæg",
    "year": "960"
  },
  {
    "name": "Knud den Store",
    "year": "995"
  },
  {
    "name": "Christian 7.",
    "year": "1749"
  },
  {
    "name": "Christian 8.",
    "year": "1786"
  },
  {
    "name": "Frederik 7.",
    "year": "1808"
  },
  {
    "name": "Frederik 9.",
    "year": "1899"
  },
  {
    "name": "Margrethe 2.",
    "year": "1940"
  },
  {
    "name": "Karen Blixen",
    "year": "1885"
  },
  {
    "name": "Carl Nielsen",
    "year": "1865"
  },
  {
    "name": "Hans Lynge",
    "year": "1906"
  },
  {
    "name": "Niviaq Korneliussen",
    "year": "1990"
  },
  {
    "name": "Anne Marie Carl-Nielsen",
    "year": "1863"
  },
  {
    "name": "Helle Thorning-Schmidt",
    "year": "1966"
  },
  {
    "name": "Lars Løkke Rasmussen",
    "year": "1964"
  },
  {
    "name": "Poul Nyrup Rasmussen",
    "year": "1943"
  },
  {
    "name": "Vikingetiden",
    "year": "750"
  },
  {
    "name": "Middelalderen",
    "year": "1050"
  },
  {
    "name": "De Slesvigske Krige",
    "year": "1848"
  },
  {
    "name": "Danmark besat af Tyskland",
    "year": "1940"
  },
  {
    "name": "Den store Jellingsten rejst af Harald Blåtand",
    "year": "965"
  },
  {
    "name": "Knud den Stores død",
    "year": "1035"
  },
  {
    "name": "Mordet på Knud den Hellige",
    "year": "1086"
  },
  {
    "name": "Lund får sin egen ærkebiskop",
    "year": "1103"
  },
  {
    "name": "Korstog til Estland og Dannebrog falder ned fra himlen",
    "year": "1219"
  },
  {
    "name": "Valdemar Atterdags regeringstid",
    "year": "1340"
  },
  {
    "name": "Den Sorte Død rammer Danmark",
    "year": "1350"
  },
  {
    "name": "Valdemar Atterdags død",
    "year": "1375"
  },
  {
    "name": "Kalmarunionen",
    "year": "1397"
  },
  {
    "name": "Reformationen gennemføres",
    "year": "1536"
  },
  {
    "name": "Christian 4.s regeringstid",
    "year": "1588"
  },
  {
    "name": "Danmark deltager i Trediveårskrigen",
    "year": "1625"
  },
  {
    "name": "Sverige angriber Danmark",
    "year": "1643"
  },
  {
    "name": "Christian 4.s død",
    "year": "1648"
  },
  {
    "name": "Krige med Sverige",
    "year": "1657"
  },
  {
    "name": "Enevælden indføres",
    "year": "1660"
  },
  {
    "name": "Kongeloven",
    "year": "1665"
  },
  {
    "name": "Slaget på Reden",
    "year": "1801"
  },
  {
    "name": "Københavns Bombardement",
    "year": "1807"
  },
  {
    "name": "Danmark afgiver Norge til Sverige",
    "year": "1814"
  },
  {
    "name": "Danmarks første frie forfatning",
    "year": "1849"
  },
  {
    "name": "Slaget ved Isted",
    "year": "1850"
  },
  {
    "name": "Dansk-slesvigske forfatning vedtages",
    "year": "1863"
  },
  {
    "name": "Den 2. Slesvigske Krig",
    "year": "1864"
  },
  {
    "name": "Systemskiftet og parlamentarisme indføres",
    "year": "1901"
  },
  {
    "name": "Kvinder får valgret til Rigsdagen",
    "year": "1915"
  },
  {
    "name": "Genforeningen med Sønderjylland",
    "year": "1920"
  },
  {
    "name": "Børskrakket på Wall Street",
    "year": "1929"
  }
];

let currentIndex = 0;
let answered = 0;
let correct = 0;
let almostCorrect = 0;
let shuffledData = [];

function startQuiz() {
    shuffledData = [...data].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    answered = 0;
    correct = 0;
    almostCorrect = 0;
    updateStats();
    showQuestion();
    // Ensure the new-run button is always visible
    document.getElementById('new-run').style.display = 'block';
}

function showQuestion() {
    if (currentIndex < shuffledData.length) {
        document.getElementById('question').textContent = `${shuffledData[currentIndex].name}?`;
        document.getElementById('answer').value = '';
    } else {
        document.getElementById('question').textContent = 'Quizen er færdig!';
        document.getElementById('new-run').style.display = 'block';
    }
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value.trim(), 10);
    const correctYear = parseInt(shuffledData[currentIndex].year, 10);

    if (userAnswer === correctYear) {
        correct++;
        document.getElementById('feedback').innerHTML = `${shuffledData[currentIndex].name}?<br><span class="correct">Rigtigt!</span>`;
    } else if (Math.abs(userAnswer - correctYear) <= 5) {
        almostCorrect++;
        document.getElementById('feedback').innerHTML = `${shuffledData[currentIndex].name}?<br><span class="almost-correct">Næsten rigtigt! Der rigtige år er ${correctYear}.</span>`;
    } else {
        document.getElementById('feedback').innerHTML = `${shuffledData[currentIndex].name}?<br><span class="incorrect">Forkert! Det rigtige år er ${correctYear}.</span>`;
    }

    answered++;
    currentIndex++;
    updateStats();
    showQuestion();
}

function updateStats() {
    document.getElementById('answered').textContent = `${answered}/${shuffledData.length}`;

    // Update correct stats in HTML
    const correctPercentage = ((correct / answered) * 100 || 0).toFixed(2);
    document.getElementById('correct').textContent = correct;
    document.getElementById('correct-percentage').textContent = correctPercentage;

    // Update almost correct stats in HTML
    const almostPercentage = ((almostCorrect / answered) * 100 || 0).toFixed(2);
    document.getElementById('almost-correct').textContent = almostCorrect;
    document.getElementById('almost-percentage').textContent = almostPercentage;
}

document.getElementById('submit').addEventListener('click', submitAnswer);
// Removed the event listener for the 'restart' button as it no longer exists
// document.getElementById('restart').addEventListener('click', startQuiz);
document.getElementById('new-run').addEventListener('click', startQuiz);

document.getElementById('answer').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        submitAnswer();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    startQuiz();
});