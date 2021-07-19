import { Component } from '@angular/core';
import { Car } from './models/car';
import { Lane } from './models/lane';
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sofka';

  players: Player[] = [];
  topPlayersInGoal: Player[] = [];

  public configGame(): void {
    const numberPlayers = parseInt(window.prompt('Enter your players number', '0'), 0);
    for (let index = 0; index < numberPlayers; index++) {
      const namePlayer = window.prompt(`Enter player's name`);
      const lane = this.initLane(index);
      const car = this.initCar(index, lane);
      const player = this.initPlayer(namePlayer, car);
      this.players.push(player);
    }
  }

  public start(): void {
    while (this.topPlayersInGoal.length !== this.players.length) {
      for (const player of this.players) {
        if (!player.isFinished) {
          console.log(`hello player ${player.name}`);
          console.log(`throw dice result ${player.throwDice()}`);
          if (player.isFinished) {
            console.log(`The player ${player.name} has finished`);
            this.topPlayersInGoal.push(player);
          }
        }
      }
    }
    console.log('the top players are:');
    console.table(this.topPlayersInGoal);
  }

  private initLane(id: number): Lane {
    const lane = new Lane();
    lane.distance = 10000;
    lane.id = id;
    return lane;
  }

  private initCar(id: number, lane: Lane): Car {
    const car = new Car(lane);
    car.id = id;
    return car;
  }

  private initPlayer(name: string, car: Car): Player {
    const player = new Player(car);
    player.name = name;
    return player;
  }
}
