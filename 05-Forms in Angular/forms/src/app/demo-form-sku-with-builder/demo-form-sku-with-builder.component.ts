import { 
  Component,
  OnInit 
} from '@angular/core';

import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: []
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'sku': 'ABC123'
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
