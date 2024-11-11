export class Player {
    // Aquí definimos los stats del jugador. 
    constructor() {
        this.health = 100;
        this.energy = 3;
        this.deck = [];
        this.graveyard = [];
    }

    attack(target, damage) {
        target.takeDamage(damage);
    }

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
    quitarCarta(card) {
        this.deck.push(card);
    }
    resetMazo(deck,graveyard) {
        
    }
}
