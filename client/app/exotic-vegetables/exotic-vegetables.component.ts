import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ExoticVegetablesService } from '../services/exotic-vegetables.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-cats1',
  templateUrl: './exotic-vegetables.component.html',
  styleUrls: ['./exotic-vegetables.scss']
})
export class ExoticVegetablesComponent implements OnInit {

  leafyGreenVegetable = {};
  leafyGreenVegetables = [];
  isLoading = true;
  isEditing = false;

  addCatForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private exoticVegetablesService: ExoticVegetablesService,
              private formBuilder: FormBuilder,
              private http: Http,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getLeafyGreenVegetables();
    this.addCatForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
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
    this.exoticVegetablesService.addLeafyGreenVegetable(this.addCatForm.value).subscribe(
      res => {
        const newCat = res.json();
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

  editLeafyGreenVegetable(leafyGreenVegetable) {
    this.exoticVegetablesService.editLeafyGreenVegetable(leafyGreenVegetable).subscribe(
      res => {
        this.isEditing = false;
        this.leafyGreenVegetable = leafyGreenVegetable;
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
