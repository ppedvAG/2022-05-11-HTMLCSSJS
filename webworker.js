// Ist nur dafür da um auf Nachrichten zu achten, die vom Hauptskript kommen

addEventListener("message", message => {
    if (message.data.command === "generate") {
        generatePrimes(message.data.amount);
    }
});

function generatePrimes(amount) {

    // Funktion, die prüft ob eine Zahl eine Primzahl ist
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < amount) {
        // Generiert eine Zahl, die mindestens 0 ist und maximal unserem maximum entspricht
        const possiblePrime = Math.floor(Math.random() * (maximum + 1));
        // Prüft ob unsere erstellte Zahl eine Primzahl ist
        if (isPrime(possiblePrime)) {
            // Falls ja wird sie zum Array hinzugefügt
            primes.push(possiblePrime);
        }
    }
    postMessage(primes);
}

// Webworker können nicht mit der Dom interagieren

// Um webworker aus sich selbst zu schließen
// self.close();