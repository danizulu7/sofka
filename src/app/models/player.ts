import { Car } from './car';

export class Player {
    car: Car;
    name: string;
    tryNumber: number;
    isFinished: boolean;

    constructor(car: Car) {
        this.car = car;
        this.tryNumber = 0;
        this.isFinished = false;
    }

    throwDice(): number {
        let dice = 0;
        if (!this.isFinished) {
            this.tryNumber ++;
            dice = Math.round(Math.random() * (6 - 1) + 1);
            this.car.move( dice * 100);
            if (this.car.distanceToGoal <= 0) {
                this.isFinished = true;
            }
        }
        return dice;
    }
}
