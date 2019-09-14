import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { GroupService } from '../services/group.service';
import { Group, FileList } from '../models';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FieldStructure } from '../models';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  personForm: FormGroup;
  selectedFile: File;
  allFiles: string[] = [];
  groups: any;
  group: Group[] = [];
  filesSelected: boolean = false;
  fields: FieldStructure[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private groupService: GroupService,
    private router: Router) {
    //
  }

  ngOnInit() {
    this.createClientForm();
    this.groupService.getAll()
      .subscribe(
        data => {
          this.groups = data;
          //   const officersIds = officers.map(officer => officer.id);
          this.fields[0] = new FieldStructure();
          this.fields[0].type = "checkbox";
          this.fields[0].name = "groups";
          this.fields[0].options = this.groups.map(
            field => ({
              key: field.refId, label: field.description
            })
          );
        },
        error => {
          console.log(error);
        }
      );
  }
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
        this.personForm.patchValue({
          image: file
        })
      }


    }
  }
  save(name, formValues) {
    this.personForm.setControl(name, formValues)
    if (this.personForm.invalid) return;
    this.productService.save(this.prepareSaveUser())
      .subscribe(
        success => {
          this.router.navigate(['/home/splash']);
        },
        error => {
          console.log(error);
        });

  }
  prepareSaveUser(): FormData {

    const formModel = this.personForm.value;
    this.createGroups(formModel.group.groups);
    let formData = new FormData();

    formData.append("refid", "0");
    formData.append("description", formModel.description);
    for (var f = 0; f < this.allFiles.length; f++) {
      formData.append("image", this.allFiles[f]);
    }

    formData.append("tags", formModel.tags);
    formData.append("imagename", formModel.image.name);


    formData.append("groups", JSON.stringify(this.group));

    return formData;
  }
  createGroups(grps): void {
    for (var property in grps) {
      if (grps.hasOwnProperty(property)) {
        console.log(grps[property])
        if (grps[property] === true) {
          this.group.push({
            RefId: parseInt(property),
            Selected: grps[property],
            Icon: ''
          })
        }
      }
    }
  }
  createClientForm() {
    this.personForm = this.fb.group({
      description: ['', Validators.required],
      tags: ['', Validators.required],
      image: [null]
    })
  }
}

