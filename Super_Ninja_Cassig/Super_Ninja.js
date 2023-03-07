class Ninja {
    constructor(name,health=0,speed,strength) { 
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName()
    {
        console.log(`the ninja name is ${this.name}`);
        return this
    }
    showStats(){
        console.log(`the ninja name is ${this.name} his health is ${this.health} speed is ${this.speed} strength is ${this.strength}`);
        return this
    }
    drinkSake(){
        this.health +=10 ;
        return this
        
    }
    
    }
class Sensei extends Ninja {
    constructor (name, health, speed,strength,wisdom=10){
        super(name, health, speed,strength)
        this.wisdom= wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log(`What one programmer can do in one month, two programmers can do in two months`);
    }

}
const superSensei = new Sensei("Master Splinter",200,10,10);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
