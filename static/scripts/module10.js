// 1. Referenz auf das Element, bei dem auf das Event geachtet werden soll
// 2. Funktion, die ausgeführt werden soll
// 3. Auf welches Event geachtet werden soll
// "click" 

// Referenzen anlegen

let addButton = document.querySelector("#createItem");
let deleteButton = document.getElementById("deleteItems");
let ulBody = document.querySelector("#listBody");
// Referenz auf den Input:
let textInp = document.querySelector("#taskName");

// funktion um ein neues li-Element zu erstellen und in den ListBody einzufügen
// 

function addListItem() {
    let newLi = document.createElement("li");
    // Der Wert aus der textbox "taskName" wird nun als Text der neuen li benutzt
    newLi.innerText = textInp.value;
    // Damit sich die Textbox danach automatisch leert:
    textInp.value = "";
    ulBody.appendChild(newLi);
}

addButton.addEventListener("click", addListItem);

// funktion um die Liste zu leeren

function deleteListItems() {
    ulBody.innerHTML = "";
}

deleteButton.addEventListener("click", deleteListItems);

// FUnktion um einzelene Elemente aus der List ezu löschen
function deleteEntry(ev) {
    console.log(ev.target);
    // Beim löschen brauchen wir eine Referenz auf das Elternelement und eine Referenz auf das zu löschende Element
    ulBody.removeChild(ev.target);
}

ulBody.addEventListener("click", ev => deleteEntry(ev));

// Nodes vom Typ Input haben die property node.value
// Im Falle von Textboxen ist das geschriebene Text, also kein Placeholder 
// Wir verwenden den value nun in der Funktion addListItem in Zeile 15

// Neue Eventarten:

//! change
// Wird ausgelöst, wenn sich der Wert eines inputs ändert
// Für schönere Kommentare: VS-Code extension "Better Comments"
// Wird nicht bei jedem Tastendruck ausgelöst

// AUfgabe:
// Erstelle eine Funktion, die den Text, der im Input enhtalten ist in der Konsole ausgibt
// Nutze dafür das Event "change"

function logText() {
    console.log(textInp.value)
}

textInp.addEventListener("change", logText);
// Wird nur ausgeführt wenn sich der Wert verändert

// ! keyup/keydown
// keyup - Event wird ausgelöst sobald ich eine Taste loslasse
// keydown - Event wird ausgelöst sobald ich die Taste runtergedrückt habe

textInp.addEventListener("keyup", logText); // wird nicht mehrfach ausgeführt wenn ich auf der Taste bleibe
textInp.addEventListener("keydown", logText); // wird mehrfach ausgeführt wenn ich auf der Taste bleibe

// ! blur
// Wird beim verlassen eines Elements ausgelöst, also wenn es nicht mehr im Fokus steht
// Egal ob sich der value dabei ändert oder nicht

textInp.addEventListener("blur", () => console.log("blur wurde ausgelöst"));

// ! focus
// Wird beim betreten eines Elements ausgelöst, also wenn es in den Fokus kommt

textInp.addEventListener("focus", () => console.log("focus wurde ausgelöst"));


// ! load
// Wird ausgelöst, wenn die Seite vollständig geladen hat, wartet auch bis javascript, css und alle anderen externen ressourcen fertig geladen wurden
// Muss auf window angewendet werden
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

// ! mouse-Events
// mouseUp/mouseDown
// mouseup - wird ausgelöst sobald ich die Maustaste loslasse
// mousdown - wird ausgelöst sobald ich die Maustaste drücke

let wrapper = document.querySelector(".wrapper");
addButton.addEventListener("mouseup", function() { console.log("mouseUp ausgelöst")});
addButton.addEventListener("mousedown", () => console.log("mouseDown ausgelöst"));

// mouseover - wird ausgelöst sobald ich mit dem Mauszeiger über meinem Element bin
// mouseout - wird ausgelöst sobald ich das Element mit dem Mauszeiger wieder verlasse

addButton.addEventListener("mouseover", function() { console.log("Mouseover ausgelöst")});
addButton.addEventListener("mouseout", () => console.log("Mouseout ausgelöst"));

// mouseenter
// mouseleave
// Alte Varianten der obigen Events

// dblclick
// Wird ausgelöst, wenn man doppelt auf ein Element klickt

addButton.addEventListener("dblclick", () => console.log("Wurde doppelt geklickt"));

// select
// Wird beim selektieren von Text ausgelöst

textInp.addEventListener("select", () => console.log("Es wurde Text markiert"))

// submit
// Wird ausgelöst sobald ein Formular abgesendet wird
// Wird häufig benutzt um zu verhindern, dass sich die Seite bei absenden des Formulars neulädt

let form = document.querySelector("form").addEventListener("submit", (ev) =>  {
    // ev.preventDefault();
    console.log("Submit ausgelöst");
    })