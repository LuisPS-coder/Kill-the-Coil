export class Card {
    constructor(name, cost, description, image, effect) {
        this.name = name;           // Nombre de la carta
        this.cost = cost;           // Costo en energía para jugar la carta
        this.description = description; // Descripción de la carta
        this.image = image;         // Ruta de imagen o nombre de archivo de imagen
        this.effect = effect;       // Función de efecto de la carta (curar, hacer daño, etc.)
    }

    use(target) {
        this.effect(target);  // Aplica el efecto de la carta al objetivo
    }
}
