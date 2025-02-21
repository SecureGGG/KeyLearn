let ListKeys = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "Backspace", ",", ".", "!", "?"
];      

let CurrentNumber = 0;

  

document.addEventListener("keydown", (event) => {
    if (ListKeys.includes(event.key)) {
        if (event.key == "Backspace") {
            console.log(event.key)
            let usenum = CurrentNumber - 1
            let HighlighterID = `${"Highlighter" + usenum}`
            let HighLighter = document.getElementById(HighlighterID)
            if (HighLighter.style.backgroundColor == "red") {
                let Faults = localStorage.getItem("Faults")
                Faults = Faults - 1
                localStorage.setItem("Faults", Faults)
                ChangeFaults()
            }
            HighLighter.remove()
            
            CurrentNumber = CurrentNumber - 1
        }
        if (event.key !== "Backspace") {
            console.log(event.key)
            let currentText = document.getElementById("Displayed-Text-1h").innerText
            if (currentText[CurrentNumber] == event.key) {
                let TextElement = document.getElementById("Displayed-Text-1h");
                let range = document.createRange();
                let textNode = TextElement.firstChild;
                let HighLighter = document.createElement("div")
                HighLighter.style.opacity = ".4"
                HighLighter.id = `${"Highlighter" + CurrentNumber}`
            
                range.setStart(textNode, CurrentNumber);
                range.setEnd(textNode, CurrentNumber + 1);
            
                let rect = range.getBoundingClientRect();
                let Section1Rect = document.getElementById("Section-1").getBoundingClientRect();
            
                HighLighter.style.left = `${rect.left - Section1Rect.left}px`;
                HighLighter.style.top = `${rect.top - Section1Rect.top}px`;
            
                HighLighter.style.position = "absolute";
                HighLighter.style.width = `${rect.width}px`;
                HighLighter.style.height = `${rect.height}px`;
                HighLighter.style.backgroundColor = "green";
                HighLighter.style.transform = "translate(0px, 0px)";
            
                let Section1 = document.getElementById("Section-1");
                Section1.appendChild(HighLighter);
            
                CurrentNumber = CurrentNumber + 1;
                console.log("GOODJOB");
                CheckIfMoreLetters()
            }
            if (currentText[CurrentNumber - 1] !== event.key) {
                let TextElement = document.getElementById("Displayed-Text-1h");
                let range = document.createRange();
                let textNode = TextElement.firstChild;
                let HighLighter = document.createElement("div")
                HighLighter.style.opacity = ".4"
                HighLighter.id = `${"Highlighter" + CurrentNumber}`
            
                range.setStart(textNode, CurrentNumber);
                range.setEnd(textNode, CurrentNumber + 1);
            
                let rect = range.getBoundingClientRect();
                let Section1Rect = document.getElementById("Section-1").getBoundingClientRect();
            
                HighLighter.style.left = `${rect.left - Section1Rect.left}px`;
                HighLighter.style.top = `${rect.top - Section1Rect.top}px`;
            
                HighLighter.style.position = "absolute";
                HighLighter.style.width = `${rect.width}px`;
                HighLighter.style.height = `${rect.height}px`;
                HighLighter.style.backgroundColor = "red";
                HighLighter.style.transform = "translate(0px, 0px)";
            
                let Section1 = document.getElementById("Section-1");
                Section1.appendChild(HighLighter);
                
                CurrentNumber = CurrentNumber + 1

                let Faults = localStorage.getItem("Faults")
                Faults++
                localStorage.setItem("Faults", Faults)
                ChangeFaults()
            }
        }
    }
    if (!ListKeys.includes(event.key)) {
        if (event.key !== "Shift") {
            if (event.key !== "Control") {
                console.log("Here")
                let HighLighter = document.getElementById("HighLighter");
                HighLighter.style.backgroundColor = "red";
                let Section1 = document.getElementById("Section-1");
                Section1.appendChild(HighLighter);
            }
        }
    }
})


function CheckData() {
    localStorage.setItem("Faults", 0)
}

CheckData()

function ChangeFaults() {
    let Faults = localStorage.getItem("Faults")
    let NoWA = document.getElementById("Number-Of-Wrong-Answers")
    NoWA.innerHTML = Faults
}

function CheckIfMoreLetters() {
    let currentText =  document.getElementById("Displayed-Text-1h").innerText
    let UseNum = CurrentNumber
    if (!currentText[UseNum]) {
        console.log("No more")
        document.location.href = "../StagesWebsite/index.html";
    }
}

