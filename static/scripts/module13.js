// Generators:

// Syntax:
// function* generatorName(optionaleParameter,...) {
// code-Block
// yield rückgabeWert;   
//}

// ! Kein return, nur yield
// ! Stern nach function-Keyword

// Einfacher Generator:

function* simpleGenerator(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}
// Aufrufen:
let exampleGen = simpleGenerator(0, 6);
// Der Aufruf erstellt nur das Generator-Objekt
// Muss erst einen Schritt durchlaufen und diesen Schritt in einer Varaible speichern
// Schritt zurückgeben lassen:
let step = exampleGen.next();
let currentValue = step.value; // So lesen wir den derzeitigen Wert aus
let currentStatus = step.done; // Sagt uns ob der Generator fertig ist
// Weiterschreiten
step = exampleGen.next(); // Wird jetzt auf 1 hochzählen
// Wenn ich den Wert jedes Schrittes speichern will muss ich dafür jeweils eine Variable anlegen oder ich pushe es in ein Array

// ID-Generator
function* idGenerator() {
    let id = 0;
    while(true) {
        yield id++;
    }
}
// Fängt bei 0 an zu zählen und zählt unbegrenz lange hoch
// Kann mir für jedes neuerstellte Objekt also ein id geben lassen

// Aufrufen einer ID:
// Erstmal muss der Generator erstellt werden:
const ids = idGenerator();
// Abrufen einer id:
console.log(ids.next().value); // Beginnt mit dem zählen und gibt sofort den Wert zurück

// Wie eine for-Schleife bei der wir selber bestimmen wann sie weiterschreiten darf und uns jeden Zwischenschritt zurückgibt
