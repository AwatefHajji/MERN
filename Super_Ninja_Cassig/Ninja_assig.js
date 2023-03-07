class Ninja {
    constructor(name,health=0,speed=3,strength=3) { 
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
    const ninja1 = new Ninja(200);
    ninja1.sayName();
    ninja1.drinkSake().showStats()
    console.log(ninja1.health);
    
