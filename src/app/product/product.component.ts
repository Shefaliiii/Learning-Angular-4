import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
form;

  constructor() { }

  ngOnInit() {
this.form= new FormGroup({

  decimal: new FormControl(""),
  binary: new  FormControl(""),
  octal: new FormControl(""),
  hexa:new FormControl("")
});
 }

 decimalChanged =function(oldvalue,  newvalue){

 }


}
