import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form, NgForm } from '@angular/forms';
import { FieldStructure } from '../models';
import { CustomizeService } from '../services/customize.service'
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorWheelService } from '../services/color.service';
import { Helper } from '../services/helper';
import { IProductOptions } from '../models/product-options';
import { ProductService } from '../services/product.service';

export interface DialogData {
  color: string[];
}

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {
  customizeForm: FormGroup;
  loading = false;
  submitted = false;
  selectedFile: File;
  allFiles: string[] = [];
  filesSelected: boolean = false;
  fields: FieldStructure[] = [];
  selectedColor: any = [];
  productOptions: IProductOptions[];

  // @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;
  color: any;
  color1: any;
  color2: any;
  preColors: any = ['#000000', '#ffffff', '#00FF00', '#FF0000'];
  imageSrc = [];
  onFileChanged(event) {
    this.filesSelected = true;
    if (event.target.files && event.target.files[0]) {
      for (var f = 0; f < event.target.files.length; f++) {
        const file = event.target.files[f];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.imageSrc.push(reader.result);
          this.selectedFile = file;
          this.allFiles.push(file);
        }
        this.customizeForm.patchValue({
          image: file
        })
      }


    }
  }
  constructor(private fb: FormBuilder,
    private customizeService: CustomizeService,
    private productService: ProductService,
    private router: Router,
    private colorWheelService: ColorWheelService,
    public dialog: MatDialog) { }
  get f() { return this.customizeForm.controls; }
  ngOnInit() {
    this.customizeForm = this.fb.group({
      theme: ['', Validators.required],
      color: [null],
      color1: [null],
      color2: [null]
    });
    this.getProductOptions();
  }
  onSubmit() {
    this.submitted = true;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDialog, {
      //width: '250px',
      data: { color: this.selectedColor }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.selectedColor = result;
    });
  }
  getImage(color) {
    if (color) {
      return `${Helper.apiServerUrl()}StaticFiles/` + color;
    }
  }
  save(formValues) {
    this.submitted = true;
    //this.customizeForm.setControl('zulu', formValues)
    if (this.customizeForm.invalid) return;
    this.loading = true;
    this.customizeService.save(this.prepareSaveUser())
      .subscribe(
        success => {
          this.router.navigate(['/home/dashboard']);
        },
        error => {
          console.log(error);
        });

  }

  getProductOptions() {
    this.productService.getMobileOptions()
      .subscribe(
        data => {
          this.productOptions = <IProductOptions[]>data;
        },
        error => {
          console.log(error);
        });
  }

  prepareSaveUser(): FormData {

    const formModel = this.customizeForm.value;
    let formData = new FormData();
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    formData.append("refid", "0");
    formData.append("userrefid", currentUser.id);
    formData.append("theme", formModel.theme);
    // formData.append("colour1", this.color);
    // formData.append("colour2", this.color1);
    // formData.append("colour3", this.color2);
    for (var f = 0; f < this.selectedColor.length; f++) {
      formData.append("colour" + (f + 1), this.selectedColor[f]);
    }
    for (var f = 0; f < this.allFiles.length; f++) {
      formData.append("image", this.allFiles[f]);
    }
    return formData;
  }

}
@Component({
  selector: 'dialog-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./customize.component.scss']
})
export class DialogDialog {

  colorPallette: any;

  constructor(
    private colorWheelService: ColorWheelService,
    public dialogRef: MatDialogRef<DialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.getColors();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  selectIt(item: HTMLElement, color: string) {
    item.className = (item.className == "Pantone black") ? "Pantone" : "Pantone black";
    if (!this.data.color) {
      this.data.color = [];
    }
    if (this.data.color.findIndex(x => x.toString() == color))
      this.data.color.push(color);
  }

  getColors() {
    this.colorWheelService.getAll()
      .subscribe(
        data => {
          this.colorPallette = data;
        },
        error => {
          console.log(error);
        }
      )
  }
  getImage(color) {
    if (color) {
      return `${Helper.apiServerUrl()}StaticFiles/` + color.colorPath;
    }
  }
}
