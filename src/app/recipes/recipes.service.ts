import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    //Array of recipe ../recipe.model.ts
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test',
            'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
        new Recipe('A test recipe', 'This is simply a test',
            'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();//Devuelve una copia exacta por lo que no se puede acceder al dato original
    }
}