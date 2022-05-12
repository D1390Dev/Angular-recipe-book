import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameIngredientInput') nameInputRef: ElementRef;
  // @ViewChild('amountIngredientInput') amountInputRef: ElementRef;
  @ViewChild('f', { static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredient;

  constructor(private shoopingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoopingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editItem = this.shoopingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          });
        }
      );
  }

  //addItem(){} -> Nombre anterior de esta función
  onSubmit(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const amoName = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoopingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
      this.shoopingListService.onIngredientAdded(newIngredient);
    }

    this.editMode = false;
    this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoopingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
