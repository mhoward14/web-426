import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(2011, 'Banana', 'Yellow');
  }}
