import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return[
      {
        id:1,
        name: 'sandwich1',
        cookTime: '10-15',
        price:10,
        favorite: false,
        origins: ['US','French'],
        stars:4.5,
        imageUrl:'/assets/food-1.jpg',
        tags:['FastFood','Sandwich'],
      },
      {
        id:2,
        name: 'sandwich2',
        cookTime: '10-15',
        price:10,
        favorite: false,
        origins: ['US'],
        stars:4.5,
        imageUrl: '/assets/food-2.jpg',
        tags:['FastFood','Sandwich'],
      },
      {
        id:3,
        name: 'sandwich3',
        cookTime: '10-15',
        price:10,
        favorite: false,
        origins: ['US'],
        stars:4.5,
        imageUrl: '/assets/food-3.jpg',
        tags:['FastFood','Sandwich'],
      },
      {
        id:4,
        name: 'sandwich4',
        cookTime: '10-15',
        price:10,
        favorite: false,
        origins: ['US','Canada'],
        stars:4.5,
        imageUrl: '/assets/food-4.jpg',
        tags:['FastFood','Sandwich'],
      },
      {
        id:5,
        name: 'sandwich5',
        cookTime: '10-15',
        price:10,
        favorite: false,
        origins: ['US'],
        stars:4.5,
        imageUrl:'/assets/food-5.jpg',
        tags:['FastFood','Sandwich'],
      },
      {
        id:6,
        name: 'sandwich6',
        cookTime: '10-15',
        price:10,
        favorite: true,
        origins: ['US'],
        stars:4.5,
        imageUrl:'/assets/food-6.jpg',
        tags:['FastFood','Sandwich'],
      },
      {
        id:7,
        name: 'sandwich7',
        cookTime: '10-15',
        price:10,
        favorite: false,
        origins: ['US'],
        stars:4.5,
        imageUrl:'/assets/food-7.jpg',
        tags:['FastFood','Sandwich'],
      },
      {
        id:8,
        name: 'sandwich9',
        cookTime: '10-15',
        price:10,
        favorite: true,
        origins: ['US'],
        stars:4.5,
        imageUrl:'/assets/food-8.jpg',
        tags:['FastFood','Sandwich'],
      },
    ];
  }
}
