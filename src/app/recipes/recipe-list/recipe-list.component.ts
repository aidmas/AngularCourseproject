import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple test.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8RAPWwtLmwXHT92R_fZ-WcRFD-0OaeGEKg&usqp=CAU'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple test.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8RAPWwtLmwXHT92R_fZ-WcRFD-0OaeGEKg&usqp=CAU'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple test.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8RAPWwtLmwXHT92R_fZ-WcRFD-0OaeGEKg&usqp=CAU'
    )
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
