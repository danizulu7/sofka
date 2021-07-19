import { Lane } from './lane';

export class Car {
    lane: Lane;
    id: number;
    distanceToGoal: number;

    constructor(lane: Lane){
        this.lane = lane;
        this.distanceToGoal = this.lane.distance;
    }

    move(distance: number): void {
        this.distanceToGoal = this.distanceToGoal - distance;
    }
}
