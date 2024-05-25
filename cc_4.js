//U81623325 
class Car {
constructor(size, width, speed, brand) 
 {
    this.size = size;
    this.width = width;
    this.speed = speed;
    this.model = model;
    this.brand = brand;
    }
    drive() {
        console.log('${this.model} ${this.model} is driving.')
    }
    accelerate() {
        this.speed += 10;
        console.log('${this.make} is accelerating. Current speed: ${this.speed} km/h');


    }
    brake() {

    }
}
class EV extends Car {
constructor(size, width, speed, brand, charge) {
 
        this.size = size;
        this.width = width;
        this.speed = speed;
        this.model = model;
        this.brand = brand;
        this.charge = charge;
        }
        accelerate() {
    if (this.charge > 0) {
        super.accelerate();
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }else{
        console.log('Battery is dead. Charge vehicle')
    }
        }
        chargeBattery(chargeTo) {
        if (chargeTo >= 0 && chargeTo <= 100) {
            this.charge =chargeTo;
            console.log('Battery charged to ${this.charge}%');
        } else{
            console.log('Wrong charge value. Insert value between 0 and 100');
        
       
        }

        }
}



