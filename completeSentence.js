//completeSentence
let nSentenceCurrentQuestion = 0;
let strSentenceCurrentAns = 0;
let currentItem
let nSentenceCorrectAns = 0;
// const
const DELAY_AFTER_SENTENCE = 1000;
const ANS_TO_WIN = 2;

/* addContentToSentence
--------------------------------------------------------------
Description: */
const addContentToSentence = (event) => {
    if (event) {
        currentItem = event.currentTarget.classList[1]
    }
    document.querySelector(".gamePage").classList.add("hidden");
    document.querySelector(".questionPage").classList.remove("hidden");
    document.querySelector(`.completeSentenceContainer`).innerHTML = "";
    // create sentence
    let sentence = El("div", {cls: `sentenceContainer`},
        El("div", {cls: `sentence`}, DATA.completeSentence[currentItem][nSentenceCurrentQuestion].sentence[0]),
        El("div", {cls: `dropDown`},
            El("div", {cls: `dropDownTitle`, listeners: {click : controlDropDown}},
            El("div", {cls: "dropDownChoice"}, "בחר/י..."),
            El("img",{attributes: { class: "dropDownArrow", src: "./assets/images/dropdownClose.svg"}}),
             ),
            El("div", {cls: `containerDropDown`})),
        El("div", {cls: `sentence`}, DATA.completeSentence[currentItem][nSentenceCurrentQuestion].sentence[1]),
    );
    document.querySelector(`.completeSentenceContainer`).append(sentence);
    //create check button (without listener)
    let check =  El("div", {cls: `checkButtonSentence`}, "בדיקה");
    document.querySelector(`.completeSentenceContainer`).append(check);
}

/* controlDropDown
--------------------------------------------------------------
Description: */
const controlDropDown = () => {
    document.querySelector(".dropDownArrow").setAttribute("src", "./assets/images/dropDownOpen.svg");
    // remove listener and add drop down
    document.querySelector(`.dropDownTitle`).removeEventListener("click" , controlDropDown);
    for(let i = 0; i < DATA.completeSentence[currentItem][nSentenceCurrentQuestion].dropDownAns.length; i++){
        let dropDownItem = El("div", {classes: [`dropDownItem`, `ans${i}`, i], listeners: {click : selectAnswer}},DATA.completeSentence[currentItem][nSentenceCurrentQuestion].dropDownAns[i]);
        document.querySelector(`.containerDropDown`).append(dropDownItem);
    }
}

/* selectAnswer
--------------------------------------------------------------
Description: */
const selectAnswer = (event) => {
    let currAns = event.currentTarget.classList[2];
    strSentenceCurrentAns = event.currentTarget.classList[1];
    document.querySelector(".dropDownArrow").setAttribute("src", "./assets/images/dropdownClose.svg");
    document.querySelector(`.dropDownChoice`).innerHTML = DATA.completeSentence[currentItem][nSentenceCurrentQuestion].dropDownAns[currAns];
    document.querySelector(`.containerDropDown`).innerHTML = ``;
    document.querySelector(`.dropDownTitle`).addEventListener("click", controlDropDown);
    document.querySelector(`.checkButtonSentence`).addEventListener("click", checkAnswer);
}

/* checkAnswer
--------------------------------------------------------------
Description: */
const checkAnswer = () => {
    document.querySelector(`.checkButtonSentence`).removeEventListener("click", checkAnswer);
    if (strSentenceCurrentAns ===  DATA.completeSentence[currentItem][nSentenceCurrentQuestion].correctAns){
        document.querySelector(`.dropDownTitle`).style.backgroundColor = "rgb(59 173 88 / 75%)";
        nSentenceCorrectAns++;
    } else {
        document.querySelector(`.dropDownTitle`).style.backgroundColor = "#d54c4cd9";
    }
    nSentenceCurrentQuestion++;
    document.querySelector(`.dropDownTitle`).removeEventListener("click" , controlDropDown);
    setTimeout(() => {
        if(nSentenceCurrentQuestion <  DATA.completeSentence[currentItem].length) {
            addContentToSentence();
        } else {
            questionsEnd();
        }
    }, DELAY_AFTER_SENTENCE) 
}


/* questionsEnd
--------------------------------------------------------------
Description: for multiple and binary questions or for complete the sentence */
const questionsEnd = () => {
    document.querySelector(".checkButtonSentence").addEventListener("click", () => {
        document.querySelector(".gamePage").classList.remove("hidden");
        document.querySelector(".questionPage").classList.add("hidden");
    });
    document.querySelector(".sentenceContainer").classList.add("lineHeight");
    if (nSentenceCorrectAns >= ANS_TO_WIN) {
        document.querySelector(".sentenceContainer").innerHTML = `מעולה! עניתם על ${nSentenceCorrectAns} תשובות נכונות מתוך ${DATA.completeSentence[currentItem].length} שאלות. כעת תוכלו להשתמש בפריט המיגון!`;
        document.querySelector(".checkButtonSentence").innerHTML = `המשך`;
        document.querySelector(`.${currentItem}`).removeEventListener("click", addContentToSentence);
        document.querySelector(`.${currentItem} .lock`).classList.add("hidden");
        document.querySelector(`.${currentItem} .item`).setAttribute("draggable", "true");
    } else {
        document.querySelector(".sentenceContainer").innerHTML = `עניתם על ${nSentenceCorrectAns} תשובות נכונות מתוך ${DATA.completeSentence[currentItem].length} שאלות לכן לא תוכלו להשתמש בפריט. עליכם לנסות שוב!`;
        document.querySelector(".checkButtonSentence").innerHTML = `המשך`;
    }
    nSentenceCorrectAns = 0;
    nSentenceCurrentQuestion = 0;
}