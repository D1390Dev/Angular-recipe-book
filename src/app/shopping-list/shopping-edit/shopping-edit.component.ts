import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameIngredientInput') nameInputRef: ElementRef;
  @ViewChild('amountIngredientInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const amoName = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, amoName);
    this.ingredientAdded.emit(newIngredient);
  }
}
