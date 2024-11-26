
class Animal {
    DEFAULT = "Animal"
    constructor(kind) {
        this.kind = kind ? kind : this.DEFAULT;
    }
    speak(){
        console.log(`I am a ${this.kind}.`);
    }
}
class Dog extends Animal{
    DEFAULT = "Dog";
    constructor(kind){
        super(); // call constructor of animal
        this.kind = kind ? kind : this.DEFAULT;
    }
}
class PetDog extends Dog{
    constructor(name){
        super();
        this.name = name;
    }
    speak(){
        console.log(`I am a ${this.kind}, and my name is ${this.name}.`);
    }
}
let c = new Animal("Wild Cat");
let d = new PetDog("Dandy");
let animals = [c, d];
animals.forEach(a=> a.speak());
