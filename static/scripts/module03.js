// Variablen:
// Sind Referenzen auf Punkte im Speicher
// In JavaScript haben wir 3 Keywords um variablen zu definieren:
// ! var VariablenName
// Gilt als Veraltet wegen Scope Gründen

// Modernen Varianten:
// let für veränderbare Werte

// const für nichtänderbare Werte, die Werte des referenzierten Objektes können sich aber ändern

let firstName = "Marius"; // Kann ich neuzuweisen
const lastName = "Sommer"; // Kann ich nicht neuzuweisen

// Primitives
// Sind grundsätzlich keine Objekte
// Sind in JS von "Wrapper"-Objekten umgeben

// Gibt 7 Stück:

// string
// Jeglicher Textinhalt
firstName = "Marius";
firstName = 'Max';
firstName = `Tiberius`;

// number
// Zahlen, egal ob Kommazahl oder Integer, negativ und positiv
let numberOne = 10;
let numberTwo = 20;
let numberThree = -49.853; // Bei Kommazahlen einen Punkt . benutzen
let numberMax = Number.MAX_VALUE;

// bigInt
// Sind dafür gedacht Zahlen darzustellen, die zu groß für number sind
let bigNum = 98756784567n;

// boolean
let wahr = true;
let falsch = false;
// Sind nur wahr oder falsch

// null
let middleName = null;
// Gewollte Abwesenheit von daten

// undefined
// Bedeutet Variable wurde initialisiert, aber nie ein Wert zugewiesen
// Oder, dass eine Objekt EIgenschaft nicht vorhanden ist

let test; // => undefined

// symbol
// Erstellt einen einzigartigen Wert 

let symbolOne = Symbol("test")

// EInzeiliger Kommentar
/*
    mehrzeilig
*/

// Arithmetische und Zuweisungsoperatore in JS

// +
// -
// *
// /
// % Teilung mit Rest 7 % 5 = 2
// ++ Inkrement
// -- Dekrement 

// = Zuweisungsoperator
// Weißt einer Variable einen Wert zu

// Können mit den arithmetischen kombiniert werden:

numberOne *= 429
// numberOne = numberOne * 429 Identisch zu Zeile 78

// Sparen uns damit das explizite ausschreiben

