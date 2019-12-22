import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form, NgForm } from '@angular/forms';
import { FieldStructure } from '../models';
import { CustomizeService } from '../services/customize.service'
import { Router} from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  allFiles: string [] = [];
  filesSelected: boolean = false;
  fields : FieldStructure[] = [];
  selectedColor: any = [];

  // @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  color:any;
  color1:any;
  color2:any;
  preColors: any = ['#000000','#ffffff','#00FF00','#FF0000'];
  imageSrc = [];
  onFileChanged(event) {
    this.filesSelected = true;
    if (event.target.files && event.target.files[0]) {
    for(var f=0;f<event.target.files.length;f++){
      const file = event.target.files[f];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imageSrc.push(reader.result);
        this.selectedFile = file;
        this.allFiles.push(file);
      }
      this.customizeForm.patchValue({
        image : file
      })
    }

      
    }
  }
  constructor( private fb: FormBuilder, 
              private customizeService:CustomizeService,
              private router: Router,
              public dialog: MatDialog) { }
  get f() { return this.customizeForm.controls; }
  ngOnInit() {
    this.customizeForm = this.fb.group({
      theme: ['', Validators.required],
      color: [null],
      color1: [null],
      color2: [null]
  });
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
  prepareSaveUser(): FormData {
    
    const formModel = this.customizeForm.value;
    let formData = new FormData();
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    formData.append("refid", "0");
    formData.append("userrefid", currentUser.id);
    formData.append("theme", formModel.theme);
    formData.append("colour1", this.color);
    formData.append("colour2", this.color1);
    formData.append("colour3", this.color2);
    for(var f=0;f<this.allFiles.length;f++){
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

  colorPallette: any = [
    '2@300x.png',
    'Asset 10@300x.png',
    'Asset 11@300x.png',
    'Asset 12@300x.png',
    'Asset 13@300x.png',
    'Asset 14@300x.png',
    'Asset 15@300x.png',
    'Asset 16@300x.png',
    'Asset 17@300x.png',
    'Asset 18@300x.png',
    'Asset 19@300x.png',
    'Asset 1@300x.png',
    'Asset 20@300x.png',
    'Asset 21@300x.png',
    'Asset 22@300x.png',
    'Asset 23@300x.png',
    'Asset 24@300x.png',
    'Asset 25@300x.png',
    'Asset 26@300x.png',
    'Asset 27@300x.png',
    'Asset 28@300x.png',
    'Asset 29@300x.png',
    'Asset 30@300x.png',
    'Asset 31@300x.png',
    'Asset 32@300x.png',
    'Asset 33@300x.png',
    'Asset 34@300x.png',
    'Asset 35@300x.png',
    'Asset 36@300x.png',
    'Asset 37@300x.png',
    'Asset 38@300x.png',
    'Asset 39@300x.png',
    'Asset 3@300x.png',
    'Asset 40@300x.png',
    'Asset 41@300x.png',
    'Asset 42@300x.png',
    'Asset 43@300x.png',
    'Asset 44@300x.png',
    'Asset 45@300x.png',
    'Asset 46@300x.png',
    'Asset 47@300x.png',
    'Asset 48@300x.png',
    'Asset 49@300x.png',
    'Asset 4@300x.png',
    'Asset 50@300x.png',
    'Asset 51@300x.png',
    'Asset 52@300x.png',
    'Asset 53@300x.png',
    'Asset 54@300x.png',
    'Asset 55@300x.png',
    'Asset 56@300x.png',
    'Asset 57@300x.png',
    'Asset 58@300x.png',
    'Asset 59@300x.png',
    'Asset 5@300x.png',
    'Asset 60@300x.png',
    'Asset 61@300x.png',
    'Asset 62@300x.png',
    'Asset 63@300x.png',
    'Asset 64@300x.png',
    'Asset 65@300x.png',
    'Asset 66@300x.png',
    'Asset 67@300x.png',
    'Asset 6@300x.png',
    'Asset 7@300x.png',
    'Asset 8@300x.png',
    'Asset 9@300x.png']
  constructor(
    public dialogRef: MatDialogRef<DialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

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
}
