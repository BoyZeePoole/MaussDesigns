import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators, Form, NgForm } from '@angular/forms';
import { FieldStructure } from '../models';
import { CustomizeService } from '../services/customize.service'
import { Router} from '@angular/router';
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
  // @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  color:any;
  color1:any;
  color2:any;

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
              private router: Router) { }
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
