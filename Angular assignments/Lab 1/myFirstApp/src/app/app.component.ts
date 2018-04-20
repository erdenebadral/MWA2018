import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class BankAccount {
  money:number = 2000;
  deposit(value:number):void{
    this.money += value;
  }
}
class MySelf {
  name:string = "asaad";
  bankAccount:BankAccount = new BankAccount();
  hobbies:string[] = ['violin','cooking'];
}
let mySelf = new MySelf();
mySelf.bankAccount.deposit(3000);

class Car{
  public acceleration:number;
  constructor(public name:string){
    this.acceleration = 0;
  }
  honk():void{
    console.log(`${this.name} is saying: Tooooooot`);
  }
  accelerate(speed:number):void{
    this.acceleration += speed;
  }
}
let car = new Car('BMW');
car.honk();
car.accelerate(50);
console.log(car.acceleration);

abstract class BaseObject{
  constructor(public width:number, public length:number){
  }
  calcSize():any{};
}
class Rectangle extends BaseObject{
  calcSize():number{
    return this.width * this.length;
  }
}
let myRectangle = new Rectangle(5,8);
myRectangle.calcSize();

class Person{
  private _firstname:string;
  
  get firstname():string{
    return this._firstname;
  }
  set firstname(value:string){
    this._firstname = value.toUpperCase();
  }
}
let saad:Person = new Person();
saad.firstname = "Asaad";
console.log(saad.firstname);

