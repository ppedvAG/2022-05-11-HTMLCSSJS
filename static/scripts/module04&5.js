// Modul 4 und 5
// Funktionen & Kontrollstrukturen

// Eigenständige Unterprogramme
// Mehrfach verwendbar
// Können Parameter erhalten
// Können Werte zurückliefern oder verändern
// Haben eigenen Gültigkeitsbereich
// SInd verschachtelbar
// Sind Objekte erster Klasse, d.h. wir können sie auch einer Varaible zuweisen
// Definiert werden sie mit dem function Keyword

// Syntax:
// function identifier(Parameter) { Code-Block }
// Definition einer Funktion:
function greetWorld() {
    console.log("Hello World!");
}

// Aufrufen einer Funktion:
greetWorld();

// Referenzieren einer Funktion
let sayHello = greetWorld;
// Hier weise ich die Funktion einer Variable zu
// Ist nur ein Alias für die Funktion
// sayHello() => führt greetWorld aus
// sayHello ohne Klammern => zeigt die Referenz und den Körper der Funktion an

function multiplier(multiplyBy) {
    function body(number) {
        return multiplyBy * number
    }
    return body
}

let doubler = multiplier(2);
// function body(number) {
//     return 2 * number
// }

// Werte zurückgeben:
// return keyword

function greetPerson(name) {
    return "Hallo " + name;
}

let greetBill = greetPerson("Bill");
let greetTommy = greetPerson("Tommy");
console.log(greetBill);
console.log(greetTommy);
greetPerson("Marius"); // Bringt nichts, weil der Rückgabewert nirgends zugewiesen wird

function sumThreeNumbers(numberOne, numberTwo, numberThree) {
    return numberOne + numberTwo + numberThree;
}
let resultOne = sumThreeNumbers(3, 6, 12); // => 21

let x= 12, y = 14, z = 22;
let resultTwo = sumThreeNumbers(x, y, z); // Kann auch Variablen übergeben
// Die Variablen werden dabei nicht verändert

// Übung:
// Erstelle eine Funktion, die zwei Zahlen miteinander multipliziert und den Wert zurückgibt

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

// Erstelle eine zweite Funktion, die einen Parameter erhält und diesen Parameter in der Konsole begrüßt

function logGreeting(name) {
    console.log("Hallo " + name);
}

// Anonyme Funktionen:
// Immediatly Invoked Functions
let iif = function (a, b) {return a *b}(50, 10); // Diese Funktion wird sofort nach Definition ausgeführt
// Wird nie benutzt, da die Funktion nur einmal aufrufbar ist

// verwendbare Anonyme Funktion:

let half = function (a) {return a / 2}; // Funktion hat an sich keinen Namen => Anonyme Funktion

console.log(half(4)); // => 2
let resultThree = half(987);
console.log(resultThree);

// Kompakte Alternative zu den anonymen Funktionen
// Lambda-/Pfeilfunktionen

let square = a => a*a;
let squareAlt = function (a) { return a * a};
// Die beiden obigen Zeilen sind faktisch gleich, aber Zeile 93 ist deutlich kompakter

// Lambdas erlauben uns das keyword function auszulassen, sowie die geschweiften Klammern und das return
// Funktioniert aber nur solange das lambda einzeilig ist

let longLambda = (a, b) => {
    a *= 2;
    b *= 2;
    return a + b;
}
// Sobald die Lambdas mehrzeilig sind, gehen viele der Vorteile verloren sind aber trotzdem eine gültige Alternative zu normalen Funktionen
console.log(square(8));
console.log(squareAlt(12));
console.log(longLambda(25, 50));

// Können also auch beliebig oft aufgerufen werden

// Default Parameter

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

let divideOne = divide(15, 20); // Passt 
let divideTwo = divide(15); // NaN
let divideThree = divide(); // NaN
// Da beide aufrufe versuchen durch undefined zu teilen
// undefined ist der Standardwert einer Variable die deklariert wurde aber niemals einen Wert erhalten hat

function divideWithDefault(numberOne = 1, numberTwo = 1) {
    return numberOne / numberTwo;
}

let divideOneD = divideWithDefault(15, 20); // Passt 
let divideTwoD = divideWithDefault(15); // 15
let divideThreeD = divideWithDefault(); // 1

// Durch ein = nach einem Parameter weisen wir ihm einen Fallback wert zu
// d.h. falls ein Aufruf mit zu wenig Parameter erfolgt , benutzt er die Werte nach dem =
// Erlaubt uns unsere Funktionen Robuster zu machen


// Kontrollstrukturen:
// Können auf veschiedene Fälle in unserem Code reagieren
// Können Code mehrfach ausführen lassen
// Arbeiten mit Bedingungen, d.h. wir brauchen booleans


// If
// Syntax: 
// if (bedingung, die geprüft wird) { Code-Block, falls der Fall eintritt }

// Brauchen logische Operatoren

// == - Prüft ob der selbe Wert vorliegt
//! === - Prüft ob der selbe und der selbe Wert vorliegt

// != ungleicher Wert
// !== ungleicher Wert oder Typ

// < - kleiner als
// > - größer als
// <= - kleiner gleich
// >= - größer gleich

// && - logisches und => Beide Bedingungen müssen eintreten
// || - logische oder => eine von beiden Bedingungen muss eintreten

function divideNotZero(numberOne, numberTwo) {
    if (typeof(numberOne) == "number" && typeof(numberTwo) == "number") {
        if (numberTwo != 0) {
            return numberOne / numberTwo;
        }
        else {
            console.log("Durch 0 kann nicht geteilt werden.");
            return numberOne;
        }
    }
    else {
        console.log("Es können nur Zahlen übergeben werden");
    }
}

// else
// Falls das if nicht eintritt

// Schreibe eine weitere if und else Bedingung, die prüft ob numberOne und numberTwo tatsächlich Zahlen sind
// typeof(numberOne) 
// "number"
// Im Falle von else
// console.log("Es können nur Zahlen übergeben werden")

// if, else if , ... else

function compare(numOne, numTwo) {
    if (numOne < numTwo) {
        console.log("numOne ist kleiner.");
    }
    else if (numOne > numTwo) { // else if wird nur geprüft, falls das if nicht eintritt
        console.log("numOne ist größer.");
    }
    else {
        console.log("Die beiden Zahlen sind gleich groß");
    }
}

function compareIf(numOne, numTwo) {
    if (numOne < numTwo) {
        console.log("numOne ist kleiner.");
    }
    if (numOne > numTwo) { // hier wird das if immer geprüft, egal ob numOne kleiner ist als numTwo
        console.log("numOne ist größer.");
    }
    else {
        console.log("Die beiden Zahlen sind gleich groß");
    }
}
// Müssen aufpassen, dass das else vor dem if steht, falls nicht beide Fälle immer geprüft werden sollen

// ternary Operator
// Kurzform von if und else

// Syntax:
// (Bedingung) ? Code, falls wahr : code, falls falsch;
(11 % 2 === 0) ? console.log("Gerade") : console.log("Ungerade");
// alert("text") öffnet eine Popup-Nachricht

// Switch-Case:

// Vergleichbar mit einem if

// Syntax:
// switch(variable) {
//  case Fall:
//        codeBlock;
//        break;
//  ...
// default:
//       codeBlock;
// }

let choice = 1 // parseInt(prompt("Gib eine Zahl ein:"));
// prompt öffnet ein Popup, in dem wir etwas tippen können und gibt einen String zurück
// Falls wir den input als Zahl brauchen => parseInt(variable) => wandelt string in zahl um

switch(choice) {
    case 1:
        console.log("Du hast die 1 gewählt");
        break;
    case 2:
        console.log("2 wurde ausgewählt");
        break;
    default:
        console.log("Ungültige wahl.")
        // break;
}
// case 1 wird ausgeführt, falls choice gleich 1 ist
// default falls es weder 1 noch 2 ist
// Verwendet die === Vergleiche, also muss es auch der selbe typ sein
// Ohne das break, wird der Fall geprüft und alles ausgeführt was nach ihm definiert wurde
// d.h. wenn wir die 1 wählen und kein break geschrieben haben
// wird case 1, case 2 und default ausgeführt
// Beim default kann das break weggelassen werden, da es ganz unten steht

// Schleifen in JS:
// Erlauben uns mehrfach den selben Code auszuführen
// Gibt zwei Arten:
// Kopfgesteuert
// Fußgesteuert
// Hauptunterschied:
// Wie oft sie MINDESTENS ausgeführt werden
// Kopfgesteuerte Schleifen werden mindestens 0 mal ausgeführt, da die Prüfung vor Beginn der Schleife durchgeführt wird

// Fußgesteuerte Schleifen werden mindestens 1 mal ausgeführt, da sie erst nach der ersten durchführung ihre Bedingung prüfen


// for, while und do...while
// Kopf: for, while
// Fuß: do...while

// for-Schleife
// Syntax:
// for(zähler; Bedingung; In-/Dekrement) { code-Block }

function countLet(limit) {
    console.log("Zählen beginnt:");
    for (let i = 0; i <= limit; i++) {

        console.log(i);
    }
    console.log("Zählen beendet.");
    console.log(i); // Kennt i nicht, da es mit let auf dem Block Scope bleibt
}

function countVar(limit) {
    console.log("Zählen beginnt:");
    for (var i = 0; i <= limit; i++) {
        console.log(i);
    }
    console.log("Zählen beendet.");
    console.log(i); // Kennt i, da es mit var auf der Funktionsebene definiert wurde
}

// Unterschied var und let:
// var kennt nur den globalen und den funktions-Scope, d.h. wenn ich einmal ein var i definieren innerhalb einer Funktion, kann ich es in der gesamten Funktion aufrufen, egal wie tief ich sie verschachtle
// let kennt den Block Scope und hält sich an seine Grenzen

function doubleCount(limit) {
    for (let i = 0; i <= limit; i++) {
        console.log(i); // Bei jedem Schritt wird die untere Schleife komplett durchgeführt
        for (let j = 0; j <= limit; j++) {
            console.log(j);
        }
    } 
}

// for Schleifen können verschachtelt werden

// FizzBuzz:
// Wir wollen eine Schleife schreiben, die von 1 bis 100 hochzählt und jede Zahl auf ihre Teilbarkeit durch 3 und5 prüft
// Falls die Zahl durch 3 teilbar ist soll in der Konsole Fizz ausgegeben werden
// Falls die Zahl durch 5 teilbar ist soll in der Konsole Buzz ausgegeben werden
// Falls die Zahl durch 3 und 5 teilbar ist soll in der Konsole FizzBuzz ausgegeben werden 
// Falls keiner der Fälle eintritt soll einfach die Zahl in der Konsole ausgegeben werden

function FizzBuzz() {
    // SChleife, die bei 1 anfägnt und bis 100 hochzählt
    // Innerhalb der Schleife Probe auf die obigen Bedingungen
    for (let i = 1; i < 101; i++) {
        let answer = "";
        if (i % 3 === 0) {
            answer += "Fizz";
        }
        if (i % 5 === 0) {
            answer += "Buzz";
        }
        if (answer == "") {
            answer = i;
        }
        console.log(answer);
    }
}

// while Schleife
// Kopfgesteuerte Schleife
// Syntax:
// while (Bedingung) { Code-Block Und das In-/Dekrementieren}
// Müssen den Zähler außerhalb der Schleife definieren und selbstständig hoch oder runterzählen

function countWhile(limit) {
    let counter = 0; // Hier muss der Zähler definiert werden, da ich ihn nicht direkt in der Schleife definieren kann
    while (counter <= limit) {
        console.log(counter);
        counter++; // Muss hier hochzählen sonst endlosschleife
    }
}

// do..while Schleife
// Fußgesteuert
// Syntax:
// do {
//    
//}
// while(Bedingung)
// Auch hier muss der counter vor der Schleife definiert werden und wir müssen selbstständig hoch oder runter zählen

function countDo(limit) {
    let counter = 0;
    do {
        console.log(counter);
        counter++;
    }
    while(counter <= limit)
}
// Mit Limit -1 wird trotzdem einmal 0 ausgegeben, da die Fußgesteuerte Schleife erst nach einem Durchlauf die Bedingung prüft

// break und continue
// break - wird benutzt um eine Schleife zu unterbrechen
// continue - wird benutzt um eine iteration zu überspringen

function countBreak() {
    for (let i = 0; i < 11; i++) {
        if (i % 2 === 0) {
            continue; // Überspringt die Schleife bei geraden Zahlen
        }
        else if (i === 9) {
            break; // beendet die Schleife sofort bei 9
        }
        console.log(i);
    }
}

// Rekursiven Funktionen:
// Eine Rekursive Funktion ist eine Funktion die sich in ihrem Körper selbst aufruft
// Fakultät:

function factorial(number) {
    if ( number === 0 || number === 1) {
        return 1;
    }
    else if (number > 1) {
        return number * factorial(number - 1);
    }
    else {
        return number * factorial(number + 1);
    }
}
// factorial(3)
// number = 3
// 3 == 0 oder 3 == 1?
// nein => 3 > 1?
// ja => return 3 * factorial(3-1)
// factorial(2)
// number = 2
// 2 == 0 oder ist 2 == 1?
// nein => 2 > 1?
// ja
// return 3 * return 2 * factorial(2 - 1)
// factorial(1)
// number = 1
// 1 == 0 oder 1 == 1?
// ja => return 1
// return 3 * (2 *  1)
// => 6
// Sind schwerer zu lesen als Schleifen und haben ähnliche Aufgabengebiete
// Sind in einfachen Fällen durch schleifen ersetzbar

// Übung:
// Erstelle eine Funktion, die das kleine einmal eins rechnet
// DIe einzelnen Schritte sollen in der Konsole wiedergegeben werden
// Es soll am Ende nichts zurückgegeben werden
// function einmaleins() {.....} 1...10 jeweils das ganze einmaleins
// "1 x 1 = 1"
// .....
// "10 x 10 = 100"
// console.log(`${i} x ${j} = ${i * j}`)#

console.log(`${resultOne} + ${resultTwo} = ${resultOne + resultTwo}`)
// 

function einMalEins() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

// Besteht aus 2 For Schleifen
// 1 Äußere und 1 Innere
// Die äußere führt für jeden ihrer Schritte 10 mal die innere aus
// d.h. es gibt 10 Konsolenausgaben pro Schritt der äußeren Schleife
// d.h. 100 Konsolenausgaben
// Backticks sind die dritte Möglichkeit string darzustellen
// DIe Backticks erlauben es uns direkt Variablen in den Text einzusetzen
// Zeile 438 == console.log(i + " x " + j + " = " + i*j)
// ${variable}
// i = 5, j = 8
// `${i} x ${j} = ${i*j}`
// `5 x 8 =  (5*8)`
// Erlaubt es uns komfortabler Variablen in Strings einzubauen, weil wir sie direkt in den Text einsetzten können

let myName = "Marius Sommer";
console.log(`Hallo ${myName}`); // formatted String
console.log("Hallo ${myName}");
console.log("Hallo " + myName); // Wie zeile 458

