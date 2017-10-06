import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ItemsService } from '../services/items.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.scss']
})
export class ItemsComponent implements OnInit {

  leafyGreenVegetable = {};
  leafyGreenVegetables = [];
  isLoading = true;
  isEditing = false;

  addCatForm: FormGroup;
  image1:any;
  image2:any;

  name = new FormControl('', Validators.required);
  type = new FormControl('', Validators.required);
  countPerKg = new FormControl('', Validators.required);
  averageWeightPerPiece = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  
  @ViewChildren("fileInput") fileInput;

  imageHolder = [];

  constructor(private exoticVegetablesService: ItemsService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { 
  }

  imageChange(input,i){
    var files = (input.target.files[0]);
    this.imageHolder[i] = window.URL.createObjectURL(input.target.files[0]);
    var reader = new FileReader();
    reader.addEventListener("load", (event:any) => {
      this.imageHolder[i] = event.target.result;
    }, false);
    reader.readAsDataURL(input.target.files[0]);
  }

  ngOnInit() {
    
    this.getLeafyGreenVegetables();

    this.addCatForm = this.formBuilder.group({
        name:this.name,
        type:this.type,
        countPerKg:this.countPerKg,
        averageWeightPerPiece:this.averageWeightPerPiece,
        price:this.price
    });
  }

  getLeafyGreenVegetables() {
    this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(
      data => this.leafyGreenVegetables = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addLeafyGreenVegetable() {

    debugger;

    var cat = this.addCatForm.value;
    cat.imageForShowCase = this.imageHolder[1];
    cat.imageForCart = this.imageHolder[2];

    this.exoticVegetablesService.addLeafyGreenVegetable(cat).subscribe(
      res => {
        const newCat = res.json();
        debugger;
        this.leafyGreenVegetables.push(newCat);
        this.addCatForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(leafyGreenVegetable) {
    this.isEditing = true;
    this.leafyGreenVegetable = leafyGreenVegetable;
  }

  cancelEditing() {
    this.isEditing = false;
    this.leafyGreenVegetable = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getLeafyGreenVegetables();
  }

  editLeafyGreenVegetable(cat) {
    
    debugger;
    // var cat = this.addCatForm.value;
    cat.imageForShowCase = this.imageHolder[1];
    cat.imageForCart = this.imageHolder[2];

    debugger;
    this.exoticVegetablesService.editLeafyGreenVegetable(cat).subscribe(
      res => {
        this.isEditing = false;
        this.leafyGreenVegetable = cat;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteLeafyGreenVegetable(leafyGreenVegetable) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.exoticVegetablesService.deleteLeafyGreenVegetable(leafyGreenVegetable).subscribe(
        res => {
          const pos = this.leafyGreenVegetables.map(elem => elem._id).indexOf(leafyGreenVegetable._id);
          this.leafyGreenVegetables.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
