import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Helper } from '../services/helper';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material';
import { SwiperOptions } from 'swiper';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from '../services/order.service';
import { ColorWheelService } from '../services/color.service';

export interface DialogData {
  color: string[];
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  selectProductId: number;
  products: any;


  selectedColor: any = [];


  config: SwiperOptions = {
    slidesPerView: 8,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 5
  };


  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private service: OrderService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.selectProductId = route.snapshot.params['refId'];
    this.getProduct();
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      comment: ['', null],
      productRefId: null,
      userRefId: null,
      colour1: [null],
      colour2: [null],
      colour3: [null]
    });
    this.getProduct();
  }

  get f() { return this.orderForm.controls; }

  getProduct() {
    this.productService.getById(this.selectProductId)
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          console.log(error);
        });
  }

  getImage(product: any) {
    let imageName = (typeof product === 'object') ? product.imageName : product;
    if (product) {
      return `${Helper.apiServerUrl()}StaticFiles/` + imageName;
    }
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
    if (this.orderForm.invalid) return;
    this.service.save(this.prepareSaveUser())
      .subscribe(
        success => {
          this.snackBar.open('Order added...', null, {
            duration: 2000,
          });
          this.router.navigate(['/home/orderlist']);
        },
        error => {
          console.log(error);
        });

  }
  prepareSaveUser(): FormData {

    const formModel = this.orderForm.value;
    let formData = new FormData();
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    formData.append("refid", "0");
    formData.append("userrefid", currentUser.id);
    formData.append("comment", formModel.comment)
    formData.append("productRefId", this.selectProductId.toString());
    for (var f = 0; f < this.selectedColor.length; f++) {
      formData.append("color" + (f+1), this.selectedColor[f]);
    }
    return formData;
  }
 

}

@Component({
  selector: 'dialog-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['./order.component.scss']
})
export class DialogDialog {

  colorPallette: any;
  constructor(
    private colorWheelService:ColorWheelService,
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
  getColors(){
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
  getImage(color){
    if(color){
      return `${Helper.apiServerUrl()}StaticFiles/` + color.colorPath;
    }    
  }
}
