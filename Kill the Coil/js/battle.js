import class Player 
import class Player 


export class Player {
    // Aquí definimos los stats del jugador. 
    constructor() {
        this.player = player;
        this.hand = new hand;
        this.enemy = 1;
    }


    empiezaTurno () {
        this.player.energy = 3;
        this.hand.robarCartas (5);
    }

    terminaTurno () {
        this.hand.cards.array.forEach(card => {this.player.graveyard.push(card)
        });
        this.hand.cards = []
    }