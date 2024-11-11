import { Card } from './card.js';

export const allCards = {
    basicAttack: new Card(
        "Ataque",
        1,
        "Inflige 3 puntos de daño a un enemigo",
        "path/to/basic-attack.png",
        target => target.takeDamage(3)
    ),
    heal: new Card(
        "Curar",
        1,
        "Restaura 5 puntos de salud al jugador",
        "path/to/heal.png",
        target => target.heal(5)
    ),
    buffUp: new Card(
        "Ataque",
        1,
        "Tu próximo ataque causa 2 puntos de daño adicional",
        "path/to/basic-attack.png",
        target => target.takeDamage(3)
    ),
    tripleHit: new Card(
        "Golpes Consecutivos",
        1,
        "Inflige 1 punto de daño 3 veces a un enemigo",
        "path/to/basic-attack.png",
        target => target.takeDamage(1)*3
    ),
    
    // Más cartas pueden ser añadidas aquí
};
