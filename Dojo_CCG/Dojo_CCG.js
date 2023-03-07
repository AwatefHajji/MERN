class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        target.resilience -= this.power;
        if(target.resilience <= 0){
            target.resilience = 0;
        }
    }
    
}
class Effect extends Card {
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
          console.log(`${this.name} is played on ${target.name}`);
          target[this.stat] += this.magnitude;
          console.log(`${this.stat} is increased by ${this.magnitude} on ${target.name}`);
        } else {
          console.log("Target must be a unit card.");
        }
      }

}

  
const Red_Belt_Ninja = new Unit('Red_Belt_Ninja',3,3,4)
const Black_Belt_Ninja = new Unit('Black_Belt_Ninja',4,5,4)
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
console.log("Turn 1");
console.log(Red_Belt_Ninja); // Red Belt Ninja, cost: 3, power: 3, resilience: 4
hardAlgorithm.play(Red_Belt_Ninja); // Increase Red Belt Ninja's resilience by 3
console.log(Red_Belt_Ninja); // Red Belt Ninja, cost: 3, power: 3, resilience: 7
//?=================================================================
console.log("Turn 2");
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
console.log(Red_Belt_Ninja); // Red Belt Ninja, cost: 3, power: 3, resilience: 7
unhandledPromiseRejection.play(Red_Belt_Ninja);//reduce Red Belt Ninja's resilience by 2
console.log(Red_Belt_Ninja);// Red Belt Ninja, cost: 3, power: 3, resilience: 7-2=5
//?=================================================================
console.log("Turn 3");
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
console.log(Black_Belt_Ninja); // Black Belt Ninja, cost: 4, power: 5, resilience: 4
pairProgramming.play(Black_Belt_Ninja); // Increase Black Belt Ninja's power by 2
console.log(Black_Belt_Ninja); // Black Belt Ninja, cost: 4, power: 7, resilience: 4




