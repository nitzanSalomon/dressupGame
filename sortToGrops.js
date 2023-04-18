 // sort to groups
let drag;
let drop;
let nDropedItems = 0;
// const
/* setDrag
--------------------------------------------------------------
Description: */
setDrag = () => {
    /* events fired on the draggable target */
    document.addEventListener("drag", function(event) {
    }, false);
    document.addEventListener("dragstart", function(event) {
        // store a ref. on the dragged elem
        drag = event.target;
        drag.style.opacity = 0;
    }, false);
    document.addEventListener("dragend", function(event) {
        drag.style.opacity = 1;
    }, false);
}

/* setDrop
--------------------------------------------------------------
Description: */
setDrop = () => {
    document.addEventListener("dragover", function(event) {
        event.preventDefault();
    }, false);
    document.addEventListener("drop", function(event) {
        drop = event.target
        // prevent default action (open as link for some elements)
        event.preventDefault();
        if (drop.classList[0] == "drop") {    
            if (drop.getAttribute("data-num") === drag.getAttribute("data-num")) {
                drag.parentNode.removeChild(drag);
                drop.appendChild(drag);
                drag.classList.add("droped");
                drag.setAttribute("draggable", "false");
                nDropedItems++
                checkForWin();
            }
        }
    }, false);
}
