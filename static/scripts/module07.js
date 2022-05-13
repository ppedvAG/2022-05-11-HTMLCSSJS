// Objekte
// Sammlung von Eigenschaften
// Eine Eigenschaft ist ein Schlüssel Wert Paar
// Props/ Properties
let greeting = "Hallo";
greeting.length; //Schlüssel: "lenght", Wert: 5
// Eine Eigenschaft kann jegliche Form annhemen
// Also ein anderes Objekt, eine number, ein String, boolean oder gar eine Funktion
// Im Falle einer Funktion nennen wir dieses prop dann Methode

// Definieren eigener Objekte:

// Object literal

const person1 = {
    "firstName": "Max",
    "lastName": "Mustermann",
    "age": 34,
    "ownsCar": true
}

// Abfragen der Werte:
person1.firstName; // dot-Notation
person1["lastName"]; // bracket-Notation

// Werte verändern:
person1.age = 89; // Setzt das age-Prop auf 89

// Props hinzufügen
person1.ownsHouse = true;

// Object-Constructor
// Erstellt ein leeres Objekt
const person2 = new Object();

person2.age = 56;
person2.firstName = "Emma";
person2.lastName = "Musterfrau";

// Shorthand 
let age = 23;
let firstName = "Gunnar";
let lastName = "Thorson";

const person3 = {age, firstName, lastName};

// Einschränkungen der dot-Notation
// Können nur gültige JS Identifier aufrufen
// Dürfen keine Zahlen am Anfang oder Leertasten im Namen haben

const city1 = {
    "Name der Stadt": "Burghausen"
}

// city1.Name der Stadt Nicht aufrufbar => Bracket-Notation nötig
city1["Name der Stadt"];

// Eigenen Konstruktor erstellen:

function Person(firstNamePara, lastNamePara, agePara, ownsCarPara) {
    this.firstName = firstNamePara;
    this.lastName = lastNamePara;
    this.age = agePara;
    this.ownsCar = ownsCarPara;
    // this ist an sich ein Platzhalter
    // es bezieht sich auf die neue Instanz, die wir erstellen
}

const person4 = new Person("Thilo", "Nun", 32, true);
/*
    new Person("Thilo", "Nun", 32, true) {
        person4.firstName = "Thilo";
        person4.lastName = "Nun";
        person4.age = 32;
        person4.ownsCar = true;
    }
*/

// Übung:
// Erstelle einen Konstruktor für die Klasse Car
// Car soll über folgende Props verfügen:
// Marke/Brand
// Modell/Model
// maxSpeed
// currentSpeed, current Speed soll anfangs immer 0 sein
// engineStatus: boolean

function changeStatus() {
    this.engineStatus = !this.engineStatus;
    // !false => true
    // !true => false
}
// Damit die Methode in Car verwendbar ist müssen wir sie nun als referenz im Constructor erwähnen
// Problem bei dieser Schreibweise:
// Funktion ist global verfügbar und somit immer aufrufbar
// "Verstopft" unseren Code

function Car(brand, model, maxSpeed, engineStatus) {
    this.brand = brand;
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.engineStatus = engineStatus;
    this.currentSpeed = 0;
    this.changeStatus = changeStatus; // Hier steht changeStatus ohne Klammern, da wir nur die Referenz auf die Funktion hinterlegen
}

const x3 = new Car("BMW", "X3", 200, false);

// Objekte können auch verschachtelt werden, da Eigenschaft-Werte andere Objekte sein können

person4.ownsCar = x3;
// Der Wert des Props ownsCar ist nun unsere in Zeile 97 erstellte Instanz
// Die Dot und Bracket-Notation können verschachtelt werden
console.log(person4.ownsCar.brand); // => "BMW" wird ausgegeben
console.log(person4["ownsCar"]["currentSpeed"]); // => 0

// Methoden erstellen

// Wir erstellen nun eine Methode, mit der wir den Motor des Autos starten können falls er aus ist und abschalten können, falls er an ist
// Diese Methode wird in Zeile 88 definiert

// Bessere alternative:
// Das class Keyword

class CarAlt {
    // constructor wird immer aufgewrufen wenn wir eine Instanz mit new CarAlt(parameter...) erstellen
    constructor (brand, model, maxSpeed) {
        this.brand = brand;
        this.model = model;
        this.engineStatus = false;
        this.currentSpeed = 0;
        this.maxSpeed = maxSpeed;
    }
    // Erleichtert das schreiben von Methoden, da sie einfach im Körper der Klasse definiert werden
    // wir brauchen nicht einmal das function Keyword
    changeStatus() {
        this.engineStatus = !this.engineStatus;
    }

    // Übung:
    // Erstelle eine Methode accelerate(newSpeed) 
    // Die Methode soll die derzeitige Geschwindigkeit auf die neue Geschwindigkeit setzen, falls newSpeed maxSpeed übersteigt soll currentSpeed auf maxSpeed gesetzt werden
    // Bonus: Falls der Motorstatus false ist, soll die Funktion in der Konsole sagen, dass das Auto erst gestartet werden muss
}

const ibiza = new CarAlt("SEAT", "Ibiza", 150);
console.log(ibiza.engineStatus); // => false
ibiza.changeStatus(); // Methoden Aufruf
console.log(ibiza.engineStatus); // => true

// Vererbung & Getter und Setter

// Getter & Setter

class Lebewesen {
    // Bis jetzt keine Logik bei der zuweisung der Werte
    constructor (spezies, alter, extremitäten) {
        this.spezies = spezies;
        this.alter = alter;
        this.extremitäten = extremitäten;
    }
    // Logik kann durch getter und setter hinzugefügt werden

    // getter greift hier auf _alter zu, damit wir nicht in eine endlosschleife laufen
    get alter() {
        return `Das Lebewesen ist ${this._alter} Jahre alt.`; 
    }

    // setter
    // Kann Logik beim zuweisen anwenden und so verhindern, dass z.B. negative Werte beim alter eingetragen
    set alter(newAge) {
        if (typeof(newAge) == "number") {
            if (0 <= newAge) {
                this._alter = newAge;
            }
            else {
                console.log("Die Zahl muss positiv sein");
            }
        }
        else {
            console.log("Es können nur Zahlen übergeben werden.");
        }
    }

    altern() {
        this._alter += 1;
    }
    // Kann sowohl in Lebewesen als auch in allen Kindsklassen benutzt werden
}

let amoebe = new Lebewesen("Amöbe",1, 0);
console.log(amoebe.alter); // Gibt uns den String zurück, den wir im Getter definiert haben
amoebe.alter = -5; // Ändert den Wert nicht, da der Setter eingreift und in der Konsole bescheid gibt, dass nur positive Zahlen gültig sind
amoebe.alter = "test"; // Ändert nichts und setter sagt, dass nur Zahlen gültig sind
amoebe.alter = 12; // Ändert den Wert ohne Probleme

// Übung:
// Erstelle für extremitäten einen getter und einen setter
// der getter soll nur this._extremitäten zurückgeben
// der setter soll verhindern, dass es mehr extremitäten werden als derzeit gesetzt sind und nur positive zahlen erlaubt sind

// Vererbung in JavaScript:
// Methoden und Eigenschaften können erweitert werden
// Für die Vererbung benutzen wir das extends Keyword

class Mensch extends Lebewesen {
    constructor(alter, vorname, nachname, beruf) {
        // Wir rufen hier den Constructor von Lebewesen auf, da es sich bei Spezies, Alter und Extremitäten um gemeinsame Attribute handelt
        super("Mensch", alter, 4);
        // Hier setzten wir die neuen Eigenschaften der Klasse
        // Diese sind nun zusätzlich zu den Eigenschaften von Lebewesen vorhanden
        this.vorname = vorname;
        this.nachname = nachname;
        this.beruf = beruf;
    }
    altern() {
        super.altern();
        // ruft die Funktion aus Lebewesen auf
        console.log(`${this.vorname} feiert heute Geburtstag.`);
        // Gibt zusätzlich etwas in der Konsole aus
    }
    // Neue Methode, die nur bei Mensch vorhanden ist.
    vorstellen() {
        console.log(`Hallo mein Name ist: ${this.vorname} ${this.nachname}`);
    }
}
const mensch1 = new Mensch(60, "Werner", "Ortmann", "Buchhalter");

class Mann extends Mensch {
    constructor(alter, vorname, nachname, beruf) {
        super(alter, vorname, nachname, beruf);
        this.geschlecht = "männlich";
    }
}

let mustermann = new Mann(29, "Max", "Mustermann", "It'ler");
// Verfügt über alle EIgenschaften und Methoden von Mensch und Lebwesen und zusätzlich die Eigenschaft Geschlecht
// Können also mehrfach vererben in JavaScript

// in, for in, instanceof
// instanceof
// Prüft ob eine Variable Instanz einer Klasse ist
// true falls ja, false falls nein
if(mustermann instanceof Mann) {
    console.log("Ist ein Instanz von Mann");
}
if(mustermann instanceof Mensch) {
    console.log("Ist ein Instanz von Mensch");
}
if(mustermann instanceof Lebewesen) {
    console.log("Ist ein Instanz von Lebewesen");
}
if(mustermann instanceof Object) {
    console.log("Ist ein Instanz von Object");
}
// Alle vier sind true, da sie eine Vererbungskette darstellen
// Eine Kindsklasse gilt auch immer als Instanz ihrer Elternklasse, aber nicht anders herum

// in
// Prüft ob ein Property in einem objekt vorhanden ist
// Gibt einen booleschen wert zurück
// true, falls das prop vorhanden ist
// false, falls es nicht vorhanden ist
// Funktioniert auch mit methoden
if("beruf" in mustermann) {
    console.log("Eigenschaft ist vorhanden");
}
if("vorname" in amoebe) {
    console.log("Vorname ist vorhanden");
}
else {
    console.log("Vorname ist nicht vorhanden");
}

// for in
// Ähnlich wie eine normale for-Schleife
//Iteriert aber über die Eigenschaften eines Objekts

for (prop in mustermann) {
    // Wenn man mit for in auf Eigenschaften zugreifen will muss man die Bracket-Notation verwenden, da JavaScript sonst nach einer Eigenschaft mit dem Namen prop sucht
    console.log(`Eigenschaft: ${prop} | Wert: ${mustermann[prop]}`);
}

// Bei Objekten die alternative zu einer normalen for-Schleife, da Objekte über keinen Index verfügen und wir somit die Eigenschaften nicht mit Zahlen ansprechen können

// Nach der Pause gehts weiter mit: !DOM und Events
