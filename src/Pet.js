class Pet {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.species}.`);
    }
}