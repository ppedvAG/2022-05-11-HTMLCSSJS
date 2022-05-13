// Funktionen
// Kontrollstrukturen
// Vordefinierte Objekte (Strings/Arrays)


function wiederholung(para1, para2, paraN) {
    return para1 + para2 + paraN;
}

let wiederholungLambda = (para1, para2, paraN) => para1 + para2 + paraN;
// return ist impliziert

// Merhzeilige Lambdas:
let longLambda = (para1, para2) => {
    para1 *= 5;
    return para1 + para2;
}


function dividieren(para1 = 1, para2 = 1) {
    return para1 / para2;
}
// default Werte werden benutzt, falls die Funktion mit zu wenigen Parametern aufgerufen wird
dividieren(1); // => NaN

// Kontrollstrukturen:
// Schleifen
// switch
// if, else if und else

let x = 5;


switch(x) {
    case 1:
        break;
    case 2:
        break;
    default:
        print("letzter fall, catch-all");
}

function compareNumbers(num1, num2) {
    if (num1 < num2) {
        print(`${num2} ist größer`);
    }
    else if (num1 > num2) {
        print(`${num1} ist größer`);
    }
    else {
        print(`Sind gleich groß`);
    }
}
// Falls else vor if weggelassen wird werden alle Fälle geprüft

// Schleifen:
// Kopfgesteuerte Schleifen:
// for
// while
// Fußgesteuerte Schleifen:
// do...while
// Fußgesteuerte Schleifen werden immer mindestens 1 mal ausgeführt, da die Prüfung erst nach dem durchlauf statt findet

function spellWord(word) {
    for (let i = 0; i < word.length; i++) {
        print(word[i]);
    }
}

function spellWordWhile(word) {
    let i = 0;
    while (i < word.length) {
        print(word[i]);
        i++;
    }
}

// Strings & Arrays
// Können beide über den Index ansprechen
// Index beginnt bei 0
// Beide verfügen über das Attribut length

let testName = "Max Mustermann";

let arr1 = [1, 2, 3, 4];
let arr2 = new Array(1,2,3,4); 

let mulitArray = [
    [1, 2, 3],
    [
        [4, 5, 6],
        [7, 8, 9]
    ],
    [10, 11, 12]
];

// Übung:
// Erstelle eine Funktion, die zwei Parameter erhält
// 1. ein eindimensionales Array bestehend aus Zahlen
// 2. eine Zahl
// Die Aufgabe der Funktion ist es zu prüfen ob die Zahl bereits im Array vorhanden ist
// und falls sie noch nicht vorhanden ist, soll sie am Ende des Arrays angefügt werden

