import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredientEvent = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  deleteShoppingItem() {

  }

  clearData() {
    this.nameInput.nativeElement.value.textContent = "";
    this.amountInput.nativeElement.value.textContent = "";
  }

  addShoppingItem() {
    const ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ingredientEvent.emit(ingredient);
  }
}
