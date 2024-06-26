const DATA = { 
    // complete the sentence
    "completeSentence":{
        vest: [
            {
                sentence: [`חודש אפריל הוא החודש`, `בשנה`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הרביעי`,
                    `הקצר`,
                    `השלישי`,
                    `הארוך`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans0" // location of answer in array
            },    
            {
                sentence: [`יש`, `ימים בשבוע`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `5`,
                    `6`,
                    `7`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans2" // location of answer in array
            },    
            {
                sentence: [`מבין כל החיות החיה הכי גדולה היא`, ``], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הקוף`,
                    `הפיל`,
                    `הדג`,
                    `האריה`,
                    `העכבר`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans1" // location of answer in array
            },    
        ],
        kneePads: [
            {
                sentence: [`חודש אפריל הוא החודש`, `בשנה`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הרביעי`,
                    `הקצר`,
                    `השלישי`,
                    `הארוך`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans0" // location of answer in array
            },    
            {
                sentence: [`יש`, `ימים בשבוע`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `5`,
                    `6`,
                    `7`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans2" // location of answer in array
            },    
            {
                sentence: [`מבין כל החיות החיה הכי גדולה היא`, ``], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הקוף`,
                    `הפיל`,
                    `הדג`,
                    `האריה`,
                    `העכבר`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans1" // location of answer in array
            },     
        ],
        helmet: [
            {
                sentence: [`חודש אפריל הוא החודש`, `בשנה`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הרביעי`,
                    `הקצר`,
                    `השלישי`,
                    `הארוך`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans0" // location of answer in array
            },    
            {
                sentence: [`יש`, `ימים בשבוע`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `5`,
                    `6`,
                    `7`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans2" // location of answer in array
            },    
            {
                sentence: [`מבין כל החיות החיה הכי גדולה היא`, ``], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הקוף`,
                    `הפיל`,
                    `הדג`,
                    `האריה`,
                    `העכבר`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans1" // location of answer in array
            },   
        ],
        leftGlove: [
            {
                sentence: [`חודש אפריל הוא החודש`, `בשנה`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הרביעי`,
                    `הקצר`,
                    `השלישי`,
                    `הארוך`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans0" // location of answer in array
            },    
            {
                sentence: [`יש`, `ימים בשבוע`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `5`,
                    `6`,
                    `7`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans2" // location of answer in array
            },    
            {
                sentence: [`מבין כל החיות החיה הכי גדולה היא`, ``], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הקוף`,
                    `הפיל`,
                    `הדג`,
                    `האריה`,
                    `העכבר`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans1" // location of answer in array
            },   
        ],
        rightGlove: [
            {
                sentence: [`חודש אפריל הוא החודש`, `בשנה`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הרביעי`,
                    `הקצר`,
                    `השלישי`,
                    `הארוך`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans0" // location of answer in array
            },    
            {
                sentence: [`יש`, `ימים בשבוע`], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `5`,
                    `6`,
                    `7`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans2" // location of answer in array
            },    
            {
                sentence: [`מבין כל החיות החיה הכי גדולה היא`, ``], // put each part of the sentence as an string in the array
                dropDownAns: [
                    `הקוף`,
                    `הפיל`,
                    `הדג`,
                    `האריה`,
                    `העכבר`,
                ], // all the options that will apear in the dropDown.
                correctAns: "ans1" // location of answer in array
            },     
        ],
    },
};

/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => { 
    document.querySelector(`.loader`).classList.add(`fade`);
    document.querySelector(".startButton").addEventListener("click", startGame);
    document.querySelector(`.aboutButton`).addEventListener("click", handelAboutPage);
});

/* handelAboutPage
--------------------------------------------------------------
Description: */
const handelAboutPage = () => {
    document.querySelector(".openingPage").classList.add("hidden");
    document.querySelector(".aboutPage").classList.remove("hidden");
    document.querySelector(".aboutPage .xIcon").addEventListener("click", () => {
      document.querySelector(".openingPage").classList.remove("hidden");
      document.querySelector(".aboutPage").classList.add("hidden");
    })
}

/* startGame
--------------------------------------------------------------
Description: */
const startGame = () => {
    document.querySelector(".openingPage").classList.add("hidden");
    document.querySelector(".gamePage").classList.remove("hidden");
    document.querySelectorAll(".itemContainer ").forEach(element => {
        element.addEventListener("click", addContentToSentence);
    });
    setDrag();
    setDrop();
}

/* checkForWin
--------------------------------------------------------------
Description: */
const checkForWin = () => {
    if(nDropedItems === 5) {
        document.querySelector(".gamePage").classList.add("hidden");
        document.querySelector(".endPage").classList.remove("hidden");
        document.querySelector(".endButton").addEventListener("click", () => {
            window.close() 
        });
    }
}

// for all of the options - dont delete
/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}

/* El
--------------------------------------------------------------
Description: for all of the options - dont delete */
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}
