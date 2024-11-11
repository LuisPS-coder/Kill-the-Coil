export class Player {
    // Aquí definimos los stats del jugador. 
    constructor() {
        this.health = 100;
        this.energy = 3;
        this.strength = 1;
        this.deck = [];
        this.graveyard = [];
        this.hand = [];
    }

    // Aquí el ataque del jugador. Aunque hay cartas que hacen distintos efectos. 
    attack(target, damage) {
        target.takeDamage(damage);
    }
    
    // Aquí definimos los stats del jugador. 
    daño(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.health = 0;
            console.log("Has muerto.");
        }
    }

    añadirCarta(card) {
        this.deck.push(card);
    }

    // Aquí incluimos una funcion para barajar el mazo cuando haga falta.     
    barajarMazo() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 y i
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; // Intercambiar elementos
        }
    }


    quitarCarta(card) {
        for (let i = this.deck.length - 1; i >= 0; i--) {
            if (this.deck[i] === card) {
              this.deck.splice(i, 1);
              break;
            }
        }
    
    
    }

    // Aquí definimos una funcion para cuando nos quedamos sin cartas en el mazo, poder volcar nuestra pila de descartes de nuevo en el mazo y seguir la partida
    resetMazo(deck,graveyard) {
        if (this.graveyard.length === 0) {
            this.deck.push(...this.graveyard);
            this.graveyard = [];
        }
    }
}
