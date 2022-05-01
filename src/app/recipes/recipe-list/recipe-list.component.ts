import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    //Array of recipe ../recipe.model.ts
    recipes: Recipe[] = [
        new Recipe('A test recipe','This is simply a test',
        'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
        new Recipe('A test recipe','This is simply a test',
        'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
    ];

    onRecipeSelected(recipe: Recipe){
        this.recipeWasSelected.emit(recipe);
    }
}