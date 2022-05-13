// Events
// Können Events auf zwei Arten in HTML integrieren
// 1. per Attribut in HTML (unsauber, da HTML mit JavaScript gemischt wird)
// 2. EventListener (gut, da wir sie ausschließlich in der JS-Datei definieren können)

// EventListener sind Funktionen, die ein HTML-Element überwachen und auf das angegebene Event warten

// z.B. Fall onClick
// Der Event Listenener wartet, bis das überwachte Element angeklickt wird und führt dann eine Funktion aus

// Hinzufügen von EventListenenern
// Wir brauchen das Objekt, das überwacht werden soll (am besten bereits als Variable gespeichert)
// Wir brauchen die Art von Event, auf die geachtet werden soll (z.B. Click, Change)
// Wir brauchen eine Funktion, die ausgeführt werden soll wenn das Event passiert, diese Funktion wird als callBack übergeben, also als Referenz ohne Klammern

// Ziel: 
// EventListener erstellen, der imme rauslöst wenn auf unseren Button in Modul09.html geklickt wird und dann einen neuen p-Tag in den Körper der div einfügt

let button = document.querySelector("#create");
let container = document.querySelector("#wrapper");

function createParagraph() {
    console.log("createParagraph wird ausgeführt.")
    let newP = document.createElement("p");
    newP.innerText = "Hallo Welt";
    // newP.addEventListener("click",
    //     ev => container.removeChild(ev.target)
       // ev steht für das gerade ausgeführte Event
     // ev.target gibt uns das tatsächliche Ziel des Events zurück in unserem Fall also das geklickte p-Element
    // geht auch Einfacher, siehe unten )
    container.appendChild(newP);
}

button.addEventListener("click", createParagraph);

// Übung:
// Füge ein click Event zum button "Inhalt löschen" hinzu
// Immer wenn der Button geklickt wird, soll der Inhalt der div container gelöscht werden
// .innerHTML = "";
// Funktion befüllen und EventListener hinzufügen
function deleteAll() {
    console.log("deleteAll wird ausgeführt");
    container.innerHTML = "";
}

document.querySelector("#delete").addEventListener("click", deleteAll);

// Erweiterung zu createParagraph
// Wir wollen nun zu jedem p Element einen EventListener hinzufügen,der ausgeführt wird wenn das Element angeklickt wird und das geklickte Element dann löschen soll
// Am einfachsten mit lambdas!


container.addEventListener("click", 
    ev => {
        console.log(ev.target);
        container.removeChild(ev.target);
    }
)

// Wir haben 3 Phasen bei den Events
// 1. Capturing-Phase, hier wird das Event von oben(<html>) nach unten, z.B. dem angeklickten Element weitergegeben
// 2. Target-Phase, wenn das Event beim tatsächlichen Ziel ankommt, also das angeklickte Elemente
// 3. bubbling-Phase, hier wird das Event von unten (ev.target) nach oben(<html>) weitergegeben

// Events werden normalerweise in der bubbling-Phase ausgeführt, also wenn es nach oben gereicht wird

// Beobachtung der Phase:

// Bubbling:
document.body.addEventListener("click", ev => console.log("Body wurde geklickt"));
let outer = document.querySelector("#outer");
let inner = document.querySelector("#inner");
let clickTarget = document.querySelector("#target");
outer.addEventListener("click", ev => console.log("outer wurde geklickt"));
inner.addEventListener("click", ev => console.log("inner wurde geklickt"));
// Target
clickTarget.addEventListener("click", ev => console.log("target wurde geklickt"));
clickTarget.addEventListener("click", ev => console.log("target wurde geklickt"), true);

// Capturing:
document.body.addEventListener("click", ev => console.log("Body wurde geklickt"), true);
outer.addEventListener("click", ev => console.log("outer wurde geklickt"), true);
inner.addEventListener("click", ev => console.log("inner wurde geklickt"), true);

// node.addEventListener("EventTyp", funktion, (true => aktiviert Capturing))
// Capturing-Phase zu nutzen ist eher selten, da das Event erst mal zum Ziel muss

// stopPropagation
// Ist eine methode, die man auf das event (ev) anwenden kann, wenn man verhindern will, dass das Event weitergereicht wird
//! document.body.addEventListener("click", ev => ev.stopPropagation(), true);
// Sollte wirklich nur benutzt werden, wenn wir uns absolut sicher sind, dass das Event nicht weitergereicht werden darf

// nodeVariable.removeEventListener("Typ", Funktion)
// Funktioniert nur wenn die übergebene Funktion einen Identifier hat
// Also nicht möglich, wenn wir die Funktion direkt in addEventListener() definieren 

document.querySelector("#delete").removeEventListener("click", deleteAll);

