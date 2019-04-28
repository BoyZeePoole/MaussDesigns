import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators, Form, NgForm } from '@angular/forms';
import { FieldStructure } from '../models';


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
  @ViewChild('fileInput') fileInput: ElementRef;
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
  constructor( private fb: FormBuilder) { }
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

}
