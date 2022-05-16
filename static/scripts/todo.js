// Referenzen auf meine Elemente anlegen

let createButton = document.querySelector(".btn-success");
let taskName = document.querySelector("#taskName");
let listBody = document.querySelector("ul");

// Anforderungen:
//// Neues li in der ul einfügen mit Klasse: list-group-item und dem Textinhalt von Taskname
//// taskName soll nach Absenden geleert werden
// beim klick auf createButton darf die Seite nicht neuladen
// Anpassung für Verwendung mit localStorage
function appendListitem() {
    // erstellt das Element
    let newLi = document.createElement("li");
    // Fügt die Klasse hinzu
    newLi.classList.add("list-group-item");
    // Setzen den Textinhalt auf den Wert in der Input-Box
    newLi.innerText = taskName.value;
    // Auslesen der Länge des localStorage zum hochzählen der Aufgaben
    let index = localStorage.length;
    let key = `Aufgabe${index}`; //Wird z.B. zu Aufgabe1, Aufgabe2 usw
    // Anlegen des Schlüssel Wert Paares:
    localStorage.setItem(key, taskName.value);
    // leeren die Input-Box
    taskName.value = "";
    // neues Listitem wird angehängt
    listBody.appendChild(newLi);
}

createButton.addEventListener("click", appendListitem);
// Verhindert das Neuladen
document.querySelector("form").addEventListener("submit", ev => ev.preventDefault());

// Wir wollen die Listitems so erweitern, dass sie sich grün einfäbren wenn man auf sie klickt
// Falls man dann ein zweites mal auf sie klickt sollen sie gelöscht werden

function updateListitem(ev) {
    let target = ev.target;
    // Prüfen hier ob das richtige Element angeklickt wurde
    if (target.nodeName === "LI") {
        console.log("li wurde geklickt");
        // Müssen nun prüfen ob das Element bereits über die Klasse list-group-item-success verfügt
        // classList.contains("KlassenName")
        // true, falls die Klasse in der Klassenliste enthalten ist
        if (target.classList.contains("list-group-item-success")) {
            // Hier soll nun zusätzlich die Aufgabe aus dem localStorage entfernt werden
            // Dafür iterieren wir über den localStorage
            for (let i = 0; i < localStorage.length; i++) {
                let currentKey = localStorage.key(i); // Gibt uns den Schlüssel des i'ten Elements zurück
                // Prüft ob der Wert des derzeitigen Schlüssel dem Text im listitem entspricht, falls ja wird er gelöscht, falls nein wird nichts gemacht
                if(localStorage[currentKey] === target.innerText) {
                    localStorage.removeItem(currentKey);
                }
            }
            // Falls es hier true ist, ist die Klasse bereits vorhanden und das Element soll gelöscht werden
            listBody.removeChild(target);
            console.log(`${target} wird gelöscht.`);
        }
        else {
            target.classList.add("list-group-item-success");
            // Um klarer anzuzeigen, dass eine Aufgabe erledigt ist soll sie zusätzlich noch durgestrichen werden
            target.style.textDecoration = "line-through";
            console.log(`${target} hat die Klasse list-group-item-success erhalten.`);
        }
    }
}

listBody.addEventListener("click", ev => updateListitem(ev));

function getTasks() {
    // Iteriert über den ganzen localStorage
    for (let i = 0; i < localStorage.length; i++) {
        // Nimmt sich den aktuellen Schlüssel
        let currentKey = localStorage.key(i);
        // prüft ob der Schlüssel das Wort "Aufgabe" enthält, falls ja erstellet er ein neues li-Element und befüllt dieses mit dem Wert des Schlüssels
        if (currentKey.indexOf("Aufgabe") !== -1) {
            let newLi = document.createElement("li");
            newLi.innerText = localStorage[currentKey];
            newLi.classList.add("list-group-item");
            listBody.appendChild(newLi);
        }
    }
}

// Beim Vollständigen Laden der Seite soll nun getTasks() ausgeführt werden
window.addEventListener("load", getTasks);