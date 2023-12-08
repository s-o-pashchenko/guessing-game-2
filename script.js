const presidentsData = {
    "presidents": [
      {
        "name": "George Washington",
        "hints": ["First President", "Father of His Country", "Mount Vernon"]
      },
      {
        "name": "John Adams",
        "hints": ["Second President", "XYZ Affair", "Founding Father"]
      },
      {
        "name": "Thomas Jefferson",
        "hints": ["Third President", "Declaration of Independence", "Louisiana Purchase"]
      },
      {
        "name": "James Madison",
        "hints": ["Fourth President", "Father of the Constitution", "War of 1812"]
      },
      {
        "name": "James Monroe",
        "hints": ["Fifth President", "Monroe Doctrine", "Era of Good Feelings"]
      },
      {
        "name": "John Quincy Adams",
        "hints": ["Sixth President", "Diplomat", "Corrupt Bargain"]
      },
      {
        "name": "Andrew Jackson",
        "hints": ["Seventh President", "Trail of Tears", "Old Hickory"]
      },
      {
        "name": "Martin Van Buren",
        "hints": ["Eighth President", "Panic of 1837", "Little Magician"]
      },
      {
        "name": "William Henry Harrison",
        "hints": ["Ninth President", "Tippecanoe", "Shortest Presidency"]
      },
      {
        "name": "John Tyler",
        "hints": ["Tenth President", "Annexation of Texas", "Accidental President"]
      },
      {
        "name": "James K. Polk",
        "hints": ["Eleventh President", "Manifest Destiny", "Mexican-American War"]
      },
      {
        "name": "Zachary Taylor",
        "hints": ["Twelfth President", "Old Rough and Ready", "Mexican-American War"]
      },
      {
        "name": "Millard Fillmore",
        "hints": ["Thirteenth President", "Compromise of 1850", "No Vice President"]
      },
      {
        "name": "Franklin Pierce",
        "hints": ["Fourteenth President", "Kansas-Nebraska Act", "Gadsden Purchase"]
      },
      {
        "name": "James Buchanan",
        "hints": ["Fifteenth President", "Bleeding Kansas", "Dred Scott Decision"]
      },
      {
        "name": "Abraham Lincoln",
        "hints": ["Sixteenth President", "Emancipation Proclamation", "Civil War"]
      },
      {
        "name": "Andrew Johnson",
        "hints": ["Seventeenth President", "Impeached", "Reconstruction"]
      },
      {
        "name": "Ulysses S. Grant",
        "hints": ["Eighteenth President", "Union General", "Scandals"]
      },
      {
        "name": "Rutherford B. Hayes",
        "hints": ["Nineteenth President", "Compromise of 1877", "Election Controversy"]
      },
      {
        "name": "James A. Garfield",
        "hints": ["Twentieth President", "Assassinated", "Short Presidency"]
      }
    ]
};

function createOptions() {
    const optionsHolder = document.getElementById('guess');
    for (let i = 0; i < presidentsData.presidents.length; i++) {
        let optionEl = document.createElement('option');
        optionEl.setAttribute('value', presidentsData.presidents[i].name);
        optionEl.innerText = presidentsData.presidents[i].name;
        optionsHolder.appendChild(optionEl);
    }
}
createOptions()

const choosePresident = () => presidentsData.presidents[Math.floor(Math.random() * presidentsData.presidents.length)];
const presidentToGuess = choosePresident();
let hintNum = 0;

function showHint() {
    let hintBox = document.getElementById("hintBox");
    hintBox.style.display = "block";
    hintBox.innerHTML = presidentToGuess.hints[hintNum];
    (hintNum < presidentToGuess.hints.length - 1) ? hintNum++ : hintNum = 0;
}

var selectElement = document.getElementById("guess");
function guess() {
    let selectedOption = selectElement.options[selectElement.selectedIndex].value;
    let answerDiv = document.getElementById('answer');
    (selectedOption == presidentToGuess.name) ? answerDiv.innerText = "You guessed" : answerDiv.innerText = "Almost";
}
