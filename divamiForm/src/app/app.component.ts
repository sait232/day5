import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'divamiForm';

  public divamiForm:any= FormGroup;

  public onInitForm() {
    this.divamiForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNo: new FormControl(''),
    });
  }

  constructor(){
    this.onInitForm();
  }

}
