export class Hand {
    constructor() {
        this.cards = [];
        this.tamañoMax = 5;
        this.player = player;
    }

    robarCarta(numero) {
        for (let i= 0; i < numero; i++) {
            if (this.player.deck.length === 0)
                this.player.barajarMazo();

            if (this.player.deck.length > 0) {
                const nuevaCarta = this.player.deck.pop();
                this.cards.push (nuevaCarta)
            }
            else {
                console.log ("No se pueden robar cartas");
                break;
            }
        }
    }
}